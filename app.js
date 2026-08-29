let INSTRUMENTS = [
  ['Sub Sine Kick', 'Sub analogique très lourd & pur', 'kick', '#ef7b68', 'A'],
  ['Crispy Acoustic Snare', 'Caisse claire timbre bois & métal', 'snare', '#eca947', 'Z'],
  ['Tick Metallic Hat', 'Charley métallique très ciselé', 'hat', '#d7c350', 'E'],
  ['Fat Moog Saw Bass', 'Basse dent de scie grasse & filtrée', 'sub', '#38b2ac', 'R'],
  ['Wood Block Perc', 'Percussion bois percutante & sèche', 'kalimba', '#83bf91', 'T'],
  ['FM Psych Guitar', 'Pluck métallique type sitar/guitare FM', 'pluck', '#69b3bf', 'Y'],
  ['Warm Chorus Rhodes', 'Piano Rhodes chaud avec chorus', 'rhodes', '#7d8bd4', 'U'],
  ['Brass Synth 80s', 'Cuivres agressifs & ouverts', 'brass', '#ad7bc3', 'I'],
  ['FM Crystal Bells', 'Cloches FM brillantes & cristallines', 'bell', '#df8bb3', 'O'],
  ['Breath Tape Flute', 'Flûte avec souffle de bande & vibrato', 'flute', '#71aaa7', 'P'],
  ['Stereo Warm Pad', 'Nappe ultra-large en chorus', 'pad', '#9598ae', 'Q']
].map(([name, type, voice, color, key], id) => ({ id, name, type, voice, color, key }));

const DUPLICATE_KEYS = ['W', 'X', 'C', 'V', 'B', 'N'];
let duplicateCount = 0;

const LABELS = ['La', 'La#', 'Si', 'Do', 'Do#', 'Ré', 'Ré#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#'];

const NOTES = Array.from({ length: 36 }, (_, id) => {
  const noteIndex = (id + 2) % 12;
  const octave = Math.floor((id + 2) / 12) + 2;
  return {
    id,
    name: `${LABELS[noteIndex]}${octave}`,
    black: LABELS[noteIndex].includes('#'),
    freq: 61.735 * (2 ** (id / 12))
  };
}).reverse();

const STEPS_COUNT = 32;

let data = {};
let undoStack = [];
let redoStack = [];

function saveStateToUndo() {
  if (current === null || current === undefined || !data[current]) return;
  const snapshot = JSON.parse(JSON.stringify(data[current].grid));
  undoStack.push(snapshot);
  if (undoStack.length > 50) undoStack.shift();
  redoStack = [];
}

function undo() {
  if (undoStack.length === 0) return;
  const currentSnapshot = JSON.parse(JSON.stringify(data[current].grid));
  redoStack.push(currentSnapshot);
  data[current].grid = undoStack.pop();
  renderGrid();
  renderMainRows();
}

function redo() {
  if (redoStack.length === 0) return;
  const currentSnapshot = JSON.parse(JSON.stringify(data[current].grid));
  undoStack.push(currentSnapshot);
  data[current].grid = redoStack.pop();
  renderGrid();
  renderMainRows();
}

function duplicatePattern() {
  saveStateToUndo();
  const track = data[current];
  
  if (selectedNotes.size > 0) {
    let minStep = STEPS_COUNT;
    let maxStep = -1;
    
    selectedNotes.forEach(key => {
      const [, s] = key.split('-').map(Number);
      if (s < minStep) minStep = s;
      if (s > maxStep) maxStep = s;
    });

    const targetStartStep = maxStep + 1;
    if (targetStartStep >= STEPS_COUNT) return;

    const selectedItems = [];
    selectedNotes.forEach(key => {
      const [nId, s] = key.split('-').map(Number);
      selectedItems.push({ nId, offset: s - minStep, val: track.grid[nId][s] });
    });

    const newSelected = new Set();

    selectedItems.forEach(({ nId, offset, val }) => {
      const targetStep = targetStartStep + offset;
      if (targetStep < STEPS_COUNT) {
        track.grid[nId][targetStep] = val;
        newSelected.add(`${nId}-${targetStep}`);
      }
    });

    if (newSelected.size > 0) {
      selectedNotes = newSelected;
    }
  } else {
    const half = Math.floor(STEPS_COUNT / 2);
    NOTES.forEach(n => {
      for (let s = 0; s < half; s++) {
        if (s + half < STEPS_COUNT) {
          track.grid[n.id][s + half] = track.grid[n.id][s];
        }
      }
    });
  }
  renderGrid();
  renderMainRows();
}

function initInstrumentData(instId) {
  return {
    grid: Object.fromEntries(NOTES.map(n => [n.id, Array(STEPS_COUNT).fill(0)])),
    volume: .7,
    pan: 0,
    reverb: 0,
    delay: 0,
    waveX: 0.2,
    waveY: 0.2, 
    solo: false,
    mute: false
  };
}

INSTRUMENTS.forEach(i => data[i.id] = initInstrumentData(i.id));

const LA_SHARP_3_INDEX = NOTES.findIndex(n => n.name === 'La#3');
const DO3_INDEX = NOTES.findIndex(n => n.name === 'Do3');
const BASS_DEFAULT_INDEX = LA_SHARP_3_INDEX !== -1 ? LA_SHARP_3_INDEX : NOTES.length - 1;

[
  [0, DO3_INDEX, [0, 8, 16, 24]],
  [1, DO3_INDEX, [8, 24]],
  [2, DO3_INDEX, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]],
  [3, BASS_DEFAULT_INDEX, [0, 6, 12, 16, 22, 28]],
  [4, DO3_INDEX - 2, [4, 12, 20, 28]],
  [5, DO3_INDEX - 4, [0, 6, 10, 16, 22, 26]],
  [6, DO3_INDEX - 5, [0, 14, 16, 30]]
].forEach(([i, n, steps]) => {
  if (n >= 0 && data[i] && data[i].grid[NOTES[n]?.id]) {
    steps.forEach(s => data[i].grid[NOTES[n].id][s] = 1);
  }
});

let audio, master, impulse, recorderProcessor, audioBuffersLeft = [], audioBuffersRight = [],
    isRecording = false,
    pendingRecording = false,
    current = 0,
    isPlaying = false,
    currentStep = 0,
    nextStepTime = 0,
    timerID,
    shiftDown = false,
    altDown = false,
    bpm = 110,
    isDraggingWavePad = false;

let selectedNotes = new Set();
let isBoxSelecting = false;
let boxStartPos = { x: 0, y: 0 };
let boxCurrentPos = { x: 0, y: 0 };
let isDraggingGroup = false;
let dragStartCell = null;
let dragCurrentCell = null;
let isShiftDragging = false;
let shiftSourceRow = null;

const $ = id => document.getElementById(id);

function getPerceivedVolume(sliderVal) {
  return Math.pow(sliderVal, 2.2);
}

function initAudio() {
  if (!audio) {
    audio = new AudioContext();
    master = audio.createDynamicsCompressor();
    master.threshold.value = -8;
    master.knee.value = 8;
    master.ratio.value = 6;
    master.attack.value = .005;
    master.release.value = .15;
    master.connect(audio.destination);

    impulse = noise(2.2);
  }
  if (audio.state === 'suspended') audio.resume();
}

function noise(seconds = .3) {
  const buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * seconds), audio.sampleRate),
        values = buffer.getChannelData(0);
  for (let i = 0; i < values.length; i++) values[i] = Math.random() * 2 - 1;
  return buffer;
}

function makeOutput(c, time) {
  const dry = audio.createGain(),
        pan = audio.createStereoPanner();
  dry.connect(pan);
  pan.connect(master);
  pan.pan.setValueAtTime(c.pan, time);

  if (c.reverb > 0) {
    const convolver = audio.createConvolver(),
          gain = audio.createGain();
    convolver.buffer = impulse;
    gain.gain.setValueAtTime(c.reverb * .4, time);
    dry.connect(convolver);
    convolver.connect(gain);
    gain.connect(master);
  }

  if (c.delay > 0) {
    const delay = audio.createDelay(.8),
          feedback = audio.createGain(),
          gain = audio.createGain();
    delay.delayTime.setValueAtTime(.22, time);
    feedback.gain.setValueAtTime(.22 + c.delay * .3, time);
    gain.gain.setValueAtTime(c.delay * .4, time);
    dry.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(gain);
    gain.connect(master);
  }

  return dry;
}

function envelope(gain, peak, time, attack, release) {
  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(Math.max(0.0001, peak), time + attack);
  const holdTime = Math.max(0.01, release - 0.04);
  gain.gain.setValueAtTime(peak, time + attack + holdTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + attack + release);
}

function playNote(inst, freq, time, duration, forcePlay = false) {
  const config = data[inst.id];

  if (!forcePlay) {
    if (config.mute) return;
    const hasSolo = INSTRUMENTS.some(i => data[i.id].solo);
    if (hasSolo && !config.solo) return;
  }

  const out = makeOutput(config, time),
        v = getPerceivedVolume(config.volume),
        len = Math.max(.12, duration),
        wx = config.waveX,
        wy = config.waveY;

  // 1. Kick French Touch / Hard House — Gros punch, pitch-drop & saturation
  if (inst.voice === 'kick') {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const drive = audio.createWaveShaper();

    // Saturation analogique pour donner de la poigne
    const curve = new Float32Array(44100);
    const k = 20;
    for (let i = 0; i < 44100; i++) {
      let x = (i * 2) / 44100 - 1;
      curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
    }
    drive.curve = curve;

    osc.type = 'sine';
    // Impact initial ultra sec
    osc.frequency.setValueAtTime(freq * 8, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.2, time + 0.02);
    osc.frequency.exponentialRampToValueAtTime(Math.max(25, freq * 0.3), time + 0.12);

    const dur = 0.35 + wy * 0.15;
    gain.gain.setValueAtTime(v * 2.2, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

    osc.connect(drive);
    drive.connect(gain);
    gain.connect(out);

    osc.start(time);
    osc.stop(time + dur + 0.01);
    return;
  }

  // 2. Snare 909 Pitched — Attaque claquante & timbre bruits filtrés
  if (inst.voice === 'snare') {
    const body = audio.createOscillator();
    const bodyGain = audio.createGain();
    body.type = 'triangle';
    body.frequency.setValueAtTime(freq * 1.5, time);
    body.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.5), time + 0.06);
    
    envelope(bodyGain, v * 1.1, time, 0.001, 0.09);
    body.connect(out);
    body.start(time);
    body.stop(time + 0.1);

    const noiseSrc = audio.createBufferSource();
    const bpFilter = audio.createBiquadFilter();
    const noiseGain = audio.createGain();
    noiseSrc.buffer = noise(0.2);
    bpFilter.type = 'bandpass';
    bpFilter.frequency.setValueAtTime(Math.min(10000, freq * 8 + wx * 1500), time);
    bpFilter.Q.value = 1.2;

    envelope(noiseGain, v * 0.9, time, 0.002, 0.14 + wy * 0.1);
    noiseSrc.connect(bpFilter);
    bpFilter.connect(out);
    noiseSrc.start(time);
    noiseSrc.stop(time + 0.3);
    return;
  }

  // 3. Hi-Hat 909 Transposé — Brillance métallique très découpée
  if (inst.voice === 'hat') {
    const ratio = freq / 261.63;
    const freqs = [387 * ratio, 532 * ratio, 600 * ratio, 785 * ratio, 920 * ratio, 1150 * ratio];
    const hatGain = audio.createGain();
    const hp = audio.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.setValueAtTime(Math.min(14000, 4000 * ratio + wx * 2500), time);

    freqs.forEach(f => {
      const osc = audio.createOscillator();
      osc.type = 'square';
      osc.frequency.setValueAtTime(f, time);
      osc.connect(hp);
      osc.start(time);
      osc.stop(time + 0.12);
    });

    envelope(hatGain, v * 0.45, time, 0.001, 0.04 + wy * 0.1);
    hp.connect(hatGain);
    hatGain.connect(out);
    return;
  }

  // 4. Acid / Moog Bass (Type "Da Funk") — Sawtooth résonante + Sub-Octave
  if (inst.voice === 'sub') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 0.5, time); // Sub à l'octave inférieure

    filter.type = 'lowpass';
    const cutoff = 250 + wx * 4500;
    filter.frequency.setValueAtTime(cutoff * 2, time);
    filter.frequency.exponentialRampToValueAtTime(Math.max(80, cutoff * 0.2), time + 0.15 + wy * 0.15);
    filter.Q.value = 5 + wy * 8; // Résonance acide

    envelope(gain, v * 1.0, time, 0.002, len);
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + len + 0.05); osc2.stop(time + len + 0.05);
    return;
  }

  // 5. Disco Wood Block / Perc — Son percutant et sec
  if (inst.voice === 'kalimba') {
    const osc = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq * 2, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, time + 0.03);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1500 + wx * 2000, time);
    filter.Q.value = 6;

    envelope(gain, v * 0.85, time, 0.001, 0.06 + wy * 0.08);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc.start(time);
    osc.stop(time + 0.15);
    return;
  }

  // 6. French Funk Guitar / Pluck — FM pincée façon riff disco filtré
  if (inst.voice === 'pluck') {
    const carrier = audio.createOscillator();
    const modulator = audio.createOscillator();
    const modGain = audio.createGain();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    carrier.type = 'sawtooth';
    modulator.type = 'square';

    carrier.frequency.setValueAtTime(freq, time);
    modulator.frequency.setValueAtTime(freq * 2, time);

    modGain.gain.setValueAtTime(freq * (2 + wy * 6), time);
    modGain.gain.exponentialRampToValueAtTime(1, time + 0.06);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800 + wx * 4000, time);

    modulator.connect(carrier.frequency);
    envelope(gain, v * 0.85, time, 0.001, len * 0.5 + wx * 0.1);
    
    carrier.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    carrier.start(time); modulator.start(time);
    carrier.stop(time + len + 0.05); modulator.stop(time + len + 0.05);
    return;
  }

  // 7. French House Chord Stab (Type "One More Time") — Accord plaqué filtré
  if (inst.voice === 'rhodes') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const osc3 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc3.type = 'square';

    // Triade mineure/majeure automatique pour créer l'effet d'échantillon (Sample Stab)
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 1.2, time);  // Tierce
    osc3.frequency.setValueAtTime(freq * 1.498, time); // Quinte

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, time);
    filter.frequency.exponentialRampToValueAtTime(800 + wx * 4000, time + 0.05);
    filter.frequency.exponentialRampToValueAtTime(300, time + len);
    filter.Q.value = 2 + wy * 3;

    envelope(gain, v * 0.75, time, 0.002, len * 0.85);
    osc1.connect(filter); osc2.connect(filter); osc3.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time); osc3.start(time);
    osc1.stop(time + len + 0.05); osc2.stop(time + len + 0.05); osc3.stop(time + len + 0.05);
    return;
  }

  // 8. Lead Synth 80s / Robot Voice (Type "Robot Rock") — Multi-Saw décalé et agressif
  if (inst.voice === 'brass') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 1.008, time); // Detune plus affirmé

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, time);
    filter.frequency.exponentialRampToValueAtTime(Math.min(12000, freq * (2 + wx * 10)), time + 0.06);
    filter.Q.value = 2 + wy * 4;

    envelope(gain, v * 0.8, time, 0.005, len);
    osc1.connect(filter); osc2.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + len + 0.05); osc2.stop(time + len + 0.05);
    return;
  }

  // 9. FM Crystal Bell — Cloche brillante et perçante
  if (inst.voice === 'bell') {
    const carrier = audio.createOscillator();
    const modulator = audio.createOscillator();
    const modGain = audio.createGain();
    const gain = audio.createGain();

    carrier.type = 'sine';
    modulator.type = 'sine';

    carrier.frequency.setValueAtTime(freq, time);
    modulator.frequency.setValueAtTime(freq * 3.5, time);

    modGain.gain.setValueAtTime(freq * (1.5 + wx * 5), time);
    modGain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);

    modulator.connect(carrier.frequency);
    envelope(gain, v * 0.7, time, 0.001, len * 1.3);
    carrier.connect(gain);
    gain.connect(out);

    carrier.start(time); modulator.start(time);
    carrier.stop(time + len + 0.1); modulator.stop(time + len + 0.1);
    return;
  }

  // 10. Vocal Flute Synth / Talkbox Effect — Filtre passe-bande serré
  if (inst.voice === 'flute') {
    const osc = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600 + wx * 3000, time);
    filter.Q.value = 6 + wy * 5; // Simule une voyelle synthétique

    envelope(gain, v * 0.85, time, 0.015, len);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc.start(time);
    osc.stop(time + len + 0.05);
    return;
  }

  // 11. Cosmic Filter Sweep Pad (Type "Voyager") — Nappe stéréo modulée
  if (inst.voice === 'pad') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'square';

    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 0.993, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(150 + wx * 600, time);
    filter.frequency.linearRampToValueAtTime(1000 + wx * 4000, time + len * 0.7);

    envelope(gain, v * 0.65, time, 0.06, len * 1.5);
    osc1.connect(filter); osc2.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + len + 0.2); osc2.stop(time + len + 0.2);
    return;
  }
}

function handleSoloClick(instId, isAltPressed) {
  const activeSolosCount = INSTRUMENTS.filter(i => data[i.id].solo).length;
  
  if (isAltPressed) {
    data[instId].solo = !data[instId].solo;
  } else {
    if (activeSolosCount > 1) {
      INSTRUMENTS.forEach(i => data[i.id].solo = false);
    } else if (data[instId].solo) {
      data[instId].solo = false;
    } else {
      INSTRUMENTS.forEach(i => data[i.id].solo = (i.id === instId));
    }
  }
}

function playCurrentInstrumentSound() {
  initAudio();
  const inst = INSTRUMENTS.find(i => i.id === current);
  if (!inst) return;

  // Tessiture adaptée selon le rôle de l'instrument dans le morceau
  const targetNotes = {
    kick: 'Do2',      // ~65 Hz  : Impact grave
    sub: 'Do2',       // ~65 Hz  : Basse profonde
    snare: 'Do3',     // ~130 Hz : Médium percussion
    hat: 'Do4',       // ~261 Hz : Aigu ciselé
    kalimba: 'Do4',   // ~261 Hz : Percussion bois claire
    pluck: 'Do4',     // ~261 Hz : Guitare / Sitar médium-aigu
    rhodes: 'Do3',    // ~130 Hz : Clavier médium
    brass: 'Do3',     // ~130 Hz : Cuivres puissants
    bell: 'Do5',      // ~523 Hz : Cloches très cristallines
    flute: 'Do4',     // ~261 Hz : Flûte expressive
    pad: 'Do3'        // ~130 Hz : Nappe d'accompagnement
  };

  const targetNoteName = targetNotes[inst.voice] || 'Do3';
  const note = NOTES.find(n => n.name === targetNoteName) || NOTES.find(n => n.name === 'Do3');

  playNote(inst, note.freq, audio.currentTime, 0.4, true);
}

function scheduler() {
  if (!isPlaying) return;
  while (nextStepTime < audio.currentTime + .25) {
    scheduleStep(currentStep, nextStepTime);
    currentStep = (currentStep + 1) % STEPS_COUNT;
    nextStepTime += (60 / bpm / 4) / 2;
  }
  timerID = setTimeout(scheduler, 20);
}

function scheduleStep(step, time) {
  if (pendingRecording && step === 0) {
    pendingRecording = false;
    startAudioRecording();
  }

  const hasSolo = INSTRUMENTS.some(i => data[i.id].solo);

  INSTRUMENTS.forEach(inst => {
    if (data[inst.id].mute) return;
    if (hasSolo && !data[inst.id].solo) return;

    NOTES.forEach(note => {
      const line = data[inst.id].grid[note.id];
      if (line[step] !== 1) return;
      let blocks = 1;
      while ((step + blocks) % STEPS_COUNT !== 0 && line[(step + blocks) % STEPS_COUNT] === 2) blocks++;
      playNote(inst, note.freq, time, blocks * ((60 / bpm / 4) / 2), true);
    });
  });

  document.querySelectorAll(`[data-step="${step}"]`).forEach(cell => {
    cell.classList.add('playing');
    setTimeout(() => cell.classList.remove('playing'), 90);
  });
}

function togglePlay() {
  initAudio();
  isPlaying = !isPlaying;
  $('playBtn').textContent = isPlaying ? '⏸ Pause' : '▶ Lecture';
  $('playBtn').classList.toggle('active', isPlaying);
  if (isPlaying) {
    currentStep = 0;
    nextStepTime = audio.currentTime + .06;
    scheduler();
  } else {
    clearTimeout(timerID);
  }
}

function createWavBlob(leftBuffers, rightBuffers, sampleRate) {
  const mergeBuffers = (buffers) => {
    const totalLength = buffers.reduce((acc, b) => acc + b.length, 0);
    const result = new Float32Array(totalLength);
    let offset = 0;
    for (const b of buffers) {
      result.set(b, offset);
      offset += b.length;
    }
    return result;
  };

  const left = mergeBuffers(leftBuffers);
  const right = mergeBuffers(rightBuffers);
  const numChannels = 2;
  const length = left.length * numChannels * 2;
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);

  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, length, true);

  let offset = 44;
  for (let i = 0; i < left.length; i++) {
    const sL = Math.max(-1, Math.min(1, left[i]));
    const sR = Math.max(-1, Math.min(1, right[i]));
    view.setInt16(offset, sL < 0 ? sL * 0x8000 : sL * 0x7FFF, true);
    view.setInt16(offset + 2, sR < 0 ? sR * 0x8000 : sR * 0x7FFF, true);
    offset += 4;
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

function startAudioRecording() {
  audioBuffersLeft = [];
  audioBuffersRight = [];
  recorderProcessor = audio.createScriptProcessor(4096, 2, 2);
  master.connect(recorderProcessor);
  recorderProcessor.connect(audio.destination);

  recorderProcessor.onaudioprocess = (e) => {
    if (!isRecording) return;
    audioBuffersLeft.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    audioBuffersRight.push(new Float32Array(e.inputBuffer.getChannelData(1)));
  };

  isRecording = true;
  const recBtn = $('recordBtn');
  recBtn.innerHTML = `<span style="color: #fff; font-size: 0.8rem;">■</span> Enregistrement en cours...`;
  recBtn.style.background = '#e53e3e';
  recBtn.style.color = '#ffffff';
}

function setupRecordButton() {
  const controlsBar = document.querySelector('.controls-bar');
  if ($('recordBtn')) return;

  const recBtn = document.createElement('button');
  recBtn.id = 'recordBtn';
  recBtn.className = 'btn-main';
  recBtn.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    color: #4a5568;
    transition: all .2s ease;
  `;
  recBtn.innerHTML = `<span style="color: #e53e3e; font-size: 0.8rem;">●</span> Enregistrer WAV`;

  recBtn.onclick = (e) => {
    initAudio();
    if (!isRecording && !pendingRecording) {
      pendingRecording = true;
      recBtn.innerHTML = `Attente début de mesure (Temps 1)...`;

      if (!isPlaying) togglePlay();
    } else if (isRecording) {
      isRecording = false;
      if (recorderProcessor) {
        recorderProcessor.disconnect();
        master.disconnect(recorderProcessor);
        recorderProcessor = null;
      }

      const wavBlob = createWavBlob(audioBuffersLeft, audioBuffersRight, audio.sampleRate);
      const url = URL.createObjectURL(wavBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sequenceur-composition-${Date.now()}.wav`;
      a.click();
      URL.revokeObjectURL(url);

      recBtn.innerHTML = `<span style="color: #e53e3e; font-size: 0.8rem;">●</span> Enregistrer WAV`;
      recBtn.style.background = '#ffffff';
      recBtn.style.color = '#4a5568';
    }
    if (e.target.blur) e.target.blur();
  };

  controlsBar.insertBefore(recBtn, $('clearBtn'));
}

function setupSelectionCanvas() {
  const gridContainer = $('gridContainer');
  if (!gridContainer) return;

  gridContainer.style.position = 'relative';

  let canvas = $('selectionCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'selectionCanvas';
    gridContainer.appendChild(canvas);
  }

  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
  `;

  canvas.width = gridContainer.scrollWidth || gridContainer.clientWidth;
  canvas.height = gridContainer.scrollHeight || gridContainer.clientHeight;
}

function drawSelectionBox() {
  const canvas = $('selectionCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!isBoxSelecting) return;

  const x = Math.min(boxStartPos.x, boxCurrentPos.x);
  const y = Math.min(boxStartPos.y, boxCurrentPos.y);
  const width = Math.abs(boxCurrentPos.x - boxStartPos.x);
  const height = Math.abs(boxCurrentPos.y - boxStartPos.y);

  ctx.fillStyle = 'rgba(66, 153, 225, 0.4)';
  ctx.fillRect(x, y, width, height);

  ctx.strokeStyle = '#3182ce';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 3]);
  ctx.strokeRect(x, y, width, height);
  ctx.setLineDash([]);
}

function extendNoteToStep(line, targetStep) {
  let startStep = -1;
  for (let s = targetStep; s >= 0; s--) {
    if (line[s] === 1) {
      startStep = s;
      break;
    }
  }

  if (startStep !== -1) {
    let cleanIndex = startStep + 1;
    while (cleanIndex < STEPS_COUNT && line[cleanIndex] === 2) {
      line[cleanIndex] = 0;
      cleanIndex++;
    }
    for (let s = startStep + 1; s <= targetStep; s++) {
      line[s] = 2;
    }
  } else {
    line[targetStep] = 1;
  }
}

function cleanupHeaderHelpText() {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent) return;
  
  const paragraphs = modalContent.querySelectorAll('p');
  paragraphs.forEach(p => {
    if (p.textContent.includes('Cliquez pour une note') || p.textContent.includes('Maintenez')) {
      p.remove();
    }
  });
}

function renderGrid() {
  const viewport = $('pianoRollViewport');
  const savedScrollTop = viewport ? viewport.scrollTop : 0;

  const track = data[current],
        color = INSTRUMENTS.find(i => i.id === current).color;
  $('gridContainer').innerHTML = '';

  let ghostTargetKeys = new Set();
  if (isDraggingGroup && dragStartCell && dragCurrentCell) {
    const deltaNote = dragCurrentCell.noteIdx - dragStartCell.noteIdx;
    const deltaStep = dragCurrentCell.step - dragStartCell.step;

    selectedNotes.forEach(key => {
      const [nId, s] = key.split('-').map(Number);
      const nIdx = NOTES.findIndex(n => n.id === nId);
      const targetNIdx = nIdx + deltaNote;
      const targetStep = s + deltaStep;

      if (targetNIdx >= 0 && targetNIdx < NOTES.length && targetStep >= 0 && targetStep < STEPS_COUNT) {
        ghostTargetKeys.add(`${NOTES[targetNIdx].id}-${targetStep}`);
      }
    });
  }

  NOTES.forEach((note, noteIdx) => {
    const row = document.createElement('div'),
          key = document.createElement('div'),
          steps = document.createElement('div');

    row.className = 'grid-row';
    key.className = `piano-key ${note.black ? 'black' : ''}`;
    key.textContent = note.name;
    steps.className = 'steps-wrapper';

    track.grid[note.id].forEach((value, step) => {
      const cell = document.createElement('div');
      const cellKey = `${note.id}-${step}`;
      const isSelected = selectedNotes.has(cellKey);
      const isGhost = ghostTargetKeys.has(cellKey);

      cell.className = `step-cell ${value ? 'active-note' : ''} ${value === 2 ? 'linked' : ''} ${isSelected ? 'selected-group' : ''} ${isGhost ? 'ghost-preview' : ''}`;
      cell.style.setProperty('--track', color);
      cell.dataset.step = step;
      cell.dataset.noteId = note.id;

      cell.onmousedown = (e) => {
        saveStateToUndo();
        const gridContainer = $('gridContainer');
        const rect = gridContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (e.altKey || altDown) {
          isBoxSelecting = true;
          boxStartPos = { x: mouseX, y: mouseY };
          boxCurrentPos = { x: mouseX, y: mouseY };
          if (!e.shiftKey) selectedNotes.clear();
          renderGrid();
          drawSelectionBox();
          return;
        }

        if (selectedNotes.has(cellKey)) {
          isDraggingGroup = true;
          dragStartCell = { noteIdx, step, noteId: note.id };
          dragCurrentCell = { noteIdx, step, noteId: note.id };
          renderGrid();
          return;
        }

        const hadSelection = selectedNotes.size > 0;
        selectedNotes.clear();

        if (hadSelection) {
          renderGrid();
          return;
        }

        const line = track.grid[note.id];
        const isExtended = e.shiftKey || shiftDown;

        if (isExtended) {
          isShiftDragging = true;
          shiftSourceRow = note.id;
          extendNoteToStep(line, step);
          renderGrid();
        } else {
          line[step] = line[step] ? 0 : 1;
          cell.classList.toggle('active-note', line[step] === 1);
          cell.classList.remove('linked');
        }

        renderMainRows();
        initAudio();
        if (line[step] > 0 || isExtended) {
          let originStep = step;
          while (originStep > 0 && line[originStep] === 2) originStep--;

          let blocks = 1;
          while ((originStep + blocks) % STEPS_COUNT !== 0 && line[(originStep + blocks) % STEPS_COUNT] === 2) blocks++;

          playNote(INSTRUMENTS.find(i => i.id === current), note.freq, audio.currentTime, blocks * ((60 / bpm / 4) / 2));
        }
      };

      cell.onmouseenter = () => {
        if (isDraggingGroup) {
          dragCurrentCell = { noteIdx, step, noteId: note.id };
          renderGrid();
        } else if (isShiftDragging && shiftSourceRow === note.id) {
          const line = track.grid[note.id];
          extendNoteToStep(line, step);
          renderGrid();
          renderMainRows();
        }
      };

      steps.append(cell);
    });

    row.append(key, steps);
    $('gridContainer').append(row);
  });

  setupSelectionCanvas();

  if (viewport) {
    viewport.scrollTop = savedScrollTop;
  }
}

function applyBoxSelectionFromCanvas() {
  const xMin = Math.min(boxStartPos.x, boxCurrentPos.x);
  const xMax = Math.max(boxStartPos.x, boxCurrentPos.x);
  const yMin = Math.min(boxStartPos.y, boxCurrentPos.y);
  const yMax = Math.max(boxStartPos.y, boxCurrentPos.y);

  const gridContainer = $('gridContainer');
  const containerRect = gridContainer.getBoundingClientRect();

  document.querySelectorAll('.step-cell').forEach(cell => {
    const step = Number(cell.dataset.step);
    const noteId = Number(cell.dataset.noteId);

    const rect = cell.getBoundingClientRect();
    const cellX = rect.left - containerRect.left + rect.width / 2;
    const cellY = rect.top - containerRect.top + rect.height / 2;

    if (cellX >= xMin && cellX <= xMax && cellY >= yMin && cellY <= yMax) {
      selectedNotes.add(`${noteId}-${step}`);
    }
  });
}

function moveSelectedGroup(deltaNote, deltaStep) {
  saveStateToUndo();
  const track = data[current];
  const newGrid = Object.fromEntries(NOTES.map(n => [n.id, Array(STEPS_COUNT).fill(0)]));
  const newSelectedNotes = new Set();

  selectedNotes.forEach(key => {
    const [nId, s] = key.split('-').map(Number);
    const val = track.grid[nId][s];
    const nIdx = NOTES.findIndex(n => n.id === nId);
    const targetNIdx = nIdx + deltaNote;
    const targetS = s + deltaStep;

    if (targetNIdx >= 0 && targetNIdx < NOTES.length && targetS >= 0 && targetS < STEPS_COUNT) {
      newGrid[NOTES[targetNIdx].id][targetS] = val;
      newSelectedNotes.add(`${NOTES[targetNIdx].id}-${targetS}`);
    }
  });

  NOTES.forEach(n => {
    for (let s = 0; s < STEPS_COUNT; s++) {
      if (!selectedNotes.has(`${n.id}-${s}`) && track.grid[n.id][s] > 0) {
        newGrid[n.id][s] = track.grid[n.id][s];
      }
    }
  });

  track.grid = newGrid;
  selectedNotes = newSelectedNotes;
  renderGrid();
  renderMainRows();
}

function deleteSelectedNotes() {
  saveStateToUndo();
  const track = data[current];
  selectedNotes.forEach(key => {
    const [nId, s] = key.split('-').map(Number);
    track.grid[nId][s] = 0;
  });
  selectedNotes.clear();
  renderGrid();
  renderMainRows();
}

window.addEventListener('mousemove', (e) => {
  if (isBoxSelecting) {
    const gridContainer = $('gridContainer');
    if (!gridContainer) return;

    const rect = gridContainer.getBoundingClientRect();
    boxCurrentPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    drawSelectionBox();
  }
});

window.addEventListener('mouseup', () => {
  if (isShiftDragging) {
    isShiftDragging = false;
    shiftSourceRow = null;
  }

  if (isBoxSelecting) {
    applyBoxSelectionFromCanvas();
    isBoxSelecting = false;
    drawSelectionBox();
    renderGrid();
  }

  if (isDraggingGroup && dragStartCell && dragCurrentCell) {
    const deltaNote = dragCurrentCell.noteIdx - dragStartCell.noteIdx;
    const deltaStep = dragCurrentCell.step - dragStartCell.step;
    moveSelectedGroup(deltaNote, deltaStep);
    isDraggingGroup = false;
    dragStartCell = null;
    dragCurrentCell = null;
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Shift') shiftDown = true;
  if (event.key === 'Alt') altDown = true;

  const isModalOpen = $('editorModal').classList.contains('open');

  // Touche Échap (Escape) pour fermer la fenêtre
  if (event.key === 'Escape' && isModalOpen) {
    event.preventDefault();
    $('closeModalBtn').click();
    return;
  }

  const isCmdOrCtrl = event.metaKey || event.ctrlKey;

  if (isModalOpen) {
    if (isCmdOrCtrl && (event.key === 'z' || event.key === 'Z')) {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) {
        redo();
      } else {
        undo();
      }
      return false;
    }

    if (isCmdOrCtrl && (event.key === 'd' || event.key === 'D') && event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      duplicatePattern();
      return false;
    }

    if (!isCmdOrCtrl && (event.key === 's' || event.key === 'S') && event.target.tagName !== 'INPUT') {
      event.preventDefault();
      handleSoloClick(current, event.altKey || altDown);
      updateModalHeaderControls();
      renderMainRows();
      return;
    }
  }

  if (event.key === 'Delete' || event.key === 'Backspace') {
    if (selectedNotes.size > 0 && isModalOpen) {
      event.preventDefault();
      deleteSelectedNotes();
    }
  }

  if (event.code === 'Space' && event.target.tagName !== 'INPUT') {
    event.preventDefault();
    togglePlay();
    return;
  }

  if (event.target.tagName !== 'INPUT' && !isCmdOrCtrl) {
    const key = event.key.toUpperCase();

    if (key === 'J' && isModalOpen) {
      event.preventDefault();
      playCurrentInstrumentSound();
      return;
    }

    const inst = INSTRUMENTS.find(i => i.key === key);
    if (inst) {
      event.preventDefault();
      data[inst.id].mute = !data[inst.id].mute;
      renderMainRows();
    }
  }
}, true);

window.addEventListener('keyup', event => {
  if (event.key === 'Shift') shiftDown = false;
  if (event.key === 'Alt') altDown = false;
});

function initWavePad() {
  let padContainer = $('wavePadContainer');
  if (!padContainer) {
    const mixerPanel = document.querySelector('.mixer-panel');
    padContainer = document.createElement('div');
    padContainer.id = 'wavePadContainer';
    padContainer.style.cssText = `
      grid-column: 1 / -1;
      margin-top: 10px;
      background: #ffffff;
      padding: 12px;
      border-radius: 12px;
      border: 1px solid #edf2f7;
      display: flex;
      flex-direction: column;
      gap: 6px;
    `;
    padContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
        <span>Morphing Onde & Timbre</span>
        <span id="val-wave" style="color: var(--text-muted);">Sine | Pur</span>
      </div>
      <div style="position: relative; width: 100%; height: 110px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e0; overflow: hidden; cursor: crosshair;">
        <canvas id="waveCanvas" style="width: 100%; height: 100%; display: block;"></canvas>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: #718096; font-weight: bold; padding: 0 4px;">
        <span>Sine</span><span>Triangle</span><span>Saw</span><span>Square / Pulse</span>
      </div>
    `;
    mixerPanel.append(padContainer);

    const canvas = $('waveCanvas');

    const updateFromEvent = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));

      data[current].waveX = x;
      data[current].waveY = y;
      drawWavePad();
      updateLabels();
    };

    canvas.onmousedown = (e) => { isDraggingWavePad = true; updateFromEvent(e); };
    window.addEventListener('mousemove', (e) => { if (isDraggingWavePad) updateFromEvent(e); });
    window.addEventListener('mouseup', () => { isDraggingWavePad = false; });

    canvas.ontouchstart = (e) => { isDraggingWavePad = true; updateFromEvent(e.touches[0]); };
    window.addEventListener('touchmove', (e) => { if (isDraggingWavePad) updateFromEvent(e.touches[0]); });
    window.addEventListener('touchend', () => { isDraggingWavePad = false; });
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      drawWavePad();
    });
  });
}

function drawWavePad() {
  const canvas = $('waveCanvas');
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;

  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const cols = 16;
  const rows = 8;

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 0.5;

  for (let i = 1; i < cols; i++) {
    ctx.beginPath();
    ctx.moveTo(rect.width * (i / cols), 0);
    ctx.lineTo(rect.width * (i / cols), rect.height);
    ctx.stroke();
  }

  for (let j = 1; j < rows; j++) {
    ctx.beginPath();
    ctx.moveTo(0, rect.height * (j / rows));
    ctx.lineTo(rect.width, rect.height * (j / rows));
    ctx.stroke();
  }

  ctx.strokeStyle = '#cbd5e0';
  ctx.lineWidth = 1;
  [0.33, 0.66].forEach(ratio => {
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(rect.width * ratio, 0);
    ctx.lineTo(rect.width * ratio, rect.height);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  const c = data[current];
  const px = c.waveX * rect.width;
  const py = (1 - c.waveY) * rect.height;

  const inst = INSTRUMENTS.find(i => i.id === current);
  const color = inst ? inst.color : '#3182ce';

  ctx.fillStyle = color;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(px, py, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;

  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 4;
  ctx.beginPath();
  ctx.arc(px, py, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function duplicateTrack(instId) {
  if (duplicateCount >= 6) {
    alert('Limite atteinte : Vous ne pouvez pas créer plus de 6 pistes dupliquées.');
    return;
  }

  const sourceIndex = INSTRUMENTS.findIndex(i => i.id === instId);
  if (sourceIndex === -1) return;

  const sourceInst = INSTRUMENTS[sourceIndex];
  const newId = Math.max(...INSTRUMENTS.map(i => i.id)) + 1;
  const assignedKey = DUPLICATE_KEYS[duplicateCount];
  duplicateCount++;

  const newInst = {
    id: newId,
    name: `${sourceInst.name} (Copie)`,
    type: sourceInst.type,
    voice: sourceInst.voice,
    color: sourceInst.color,
    key: assignedKey
  };

  INSTRUMENTS.splice(sourceIndex + 1, 0, newInst);

  data[newId] = initInstrumentData(newId);
  data[newId].volume = data[instId].volume;
  data[newId].pan = data[instId].pan;
  data[newId].reverb = data[instId].reverb;
  data[newId].delay = data[instId].delay;
  data[newId].waveX = data[instId].waveX;
  data[newId].waveY = data[instId].waveY;

  renderMainRows();
}

function setupHomeFooterHelpText() {
  const instList = $('instrumentsList');
  if (!instList || $('homeFooterHelpNote')) return;

  const note = document.createElement('div');
  note.id = 'homeFooterHelpNote';
  note.style.cssText = `
    max-width: 820px;
    margin: 20px auto 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.82rem;
    color: #4a5568;
  `;

  const cardStyle = `
    background: #ffffff;
    border-radius: 10px;
    padding: 10px 14px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    text-align: left;
    line-height: 1.4;
  `;

  note.innerHTML = `
    <div style="${cardStyle}">
      <strong style="color: #2d3748; display: block; margin-bottom: 2px;">🎹 Raccourcis Mute / Démute</strong>
      <b>A</b> (Kick) · <b>Z</b> (Snare) · <b>E</b> (Hat) · <b>R</b> (Bass) · <b>T</b> (Perc) · <b>Y</b> (Guitar) · <b>U</b> (Rhodes) · <b>I</b> (Brass) · <b>O</b> (Bell) · <b>P</b> (Flute) · <b>Q</b> (Pad)
    </div>

    <div style="${cardStyle}">
      <strong style="color: #2d3748; display: block; margin-bottom: 2px;">🎛️ Mode Solo (S)</strong>
      <b>Clic simple :</b> solo exclusif (ou désactiver) · <b>Alt + Clic :</b> solos multiples
    </div>

    <div style="${cardStyle}">
      <strong style="color: #2d3748; display: block; margin-bottom: 2px;">📋 Pistes dupliquées</strong>
      Max <b>6 pistes</b> supplémentaires (Lettres : <b>W, X, C, V, B, N</b>)
    </div>
  `;

  instList.parentNode.insertBefore(note, instList.nextSibling);
}

function renderMainRows() {
  $('instrumentsList').innerHTML = '';
  INSTRUMENTS.forEach(inst => {
    const states = Array.from({ length: STEPS_COUNT }, (_, step) =>
      Math.max(...NOTES.map(note => data[inst.id].grid[note.id][step]))
    );

    const isSolo = data[inst.id].solo;
    const isMute = data[inst.id].mute;

    const row = document.createElement('div');
    row.className = `instrument-row-container ${isMute ? 'muted' : ''}`;

    row.innerHTML = `
      <button class="instrument-row" style="--track: ${inst.color}">
        <span class="inst-info">
          <span class="key-badge" title="Touche Mute/Unmute">${inst.key}</span>
          <span>
            <span class="instrument-name">${inst.name}</span>
            <span class="instrument-type">${inst.type}</span>
          </span>
        </span>
        <span class="pattern">
          ${states.map(value => `<i class="${value ? 'active' : ''} ${value === 2 ? 'linked' : ''}"></i>`).join('')}
        </span>
      </button>
      <button class="btn-track btn-mute ${isMute ? 'active' : ''}" title="Mute [${inst.key}]">M</button>
      <button class="btn-track btn-solo ${isSolo ? 'active' : ''}" title="Solo (Clic: Solo exclusif / Alt+Clic: Solo multiple)">S</button>
      <button class="btn-track btn-duplicate" title="Dupliquer sous cette piste">+</button>
    `;

    row.querySelector('.instrument-row').onclick = (e) => {
      openEditor(inst.id);
      if (e.target.blur) e.target.blur();
    };
    row.querySelector('.btn-mute').onclick = (e) => {
      e.stopPropagation();
      data[inst.id].mute = !data[inst.id].mute;
      renderMainRows();
      if (e.target.blur) e.target.blur();
    };
    row.querySelector('.btn-solo').onclick = (e) => {
      e.stopPropagation();
      handleSoloClick(inst.id, e.altKey || altDown);
      renderMainRows();
      if ($('editorModal').classList.contains('open')) updateModalHeaderControls();
      if (e.target.blur) e.target.blur();
    };
    row.querySelector('.btn-duplicate').onclick = (e) => {
      e.stopPropagation();
      duplicateTrack(inst.id);
      if (e.target.blur) e.target.blur();
    };

    $('instrumentsList').append(row);
  });

  setupHomeFooterHelpText();
}

function updateLabels() {
  const c = data[current];
  $('val-vol').textContent = `${Math.round(c.volume * 100)} %`;
  $('val-pan').textContent = c.pan === 0 ? 'Centre' : c.pan > 0 ? 'Droite' : 'Gauche';
  $('val-reverb').textContent = `${Math.round(c.reverb * 100)} %`;
  $('val-delay').textContent = `${Math.round(c.delay * 100)} %`;

  if ($('val-wave')) {
    let waveName = 'Sine';
    if (c.waveX >= 0.33 && c.waveX < 0.66) waveName = 'Triangle';
    else if (c.waveX >= 0.66 && c.waveX < 0.9) waveName = 'Sawtooth';
    else if (c.waveX >= 0.9) waveName = 'Square / Pulse';

    let character = 'Pur / Doux';
    if (c.waveY > 0.3 && c.waveY <= 0.6) character = 'Chaud / Brillant';
    else if (c.waveY > 0.6 && c.waveY <= 0.85) character = 'Filtre / Texture';
    else if (c.waveY > 0.85) character = 'Rond / Profond';

    $('val-wave').textContent = `${waveName} | ${character}`;
  }
}

function setupModalHeaderControls() {
  const header = document.querySelector('.modal-header');
  if (!header || $('modalHeaderControls')) return;

  const container = document.createElement('div');
  container.id = 'modalHeaderControls';
  container.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    margin-right: 15px;
  `;

  const testBtn = document.createElement('button');
  testBtn.id = 'btnTestSound';
  testBtn.className = 'btn-main';
  testBtn.style.cssText = `
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 0.85rem;
    background: #edf2f7;
    color: #2d3748;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    cursor: pointer;
  `;
  testBtn.innerHTML = `🔊 Jouer <kbd style="background: #fff; border: 1px solid #a0aec0; border-radius: 3px; padding: 1px 5px; font-size: 0.75rem;">J</kbd>`;
  testBtn.onclick = (e) => {
    playCurrentInstrumentSound();
    if (e.target.blur) e.target.blur();
  };

  const soloBtn = document.createElement('button');
  soloBtn.id = 'modalSoloBtn';
  soloBtn.className = 'btn-track btn-solo';
  soloBtn.textContent = 'S';
  soloBtn.title = 'Solo (Touche S)';
  soloBtn.onclick = (e) => {
    handleSoloClick(current, e.altKey || altDown);
    updateModalHeaderControls();
    renderMainRows();
    if (e.target.blur) e.target.blur();
  };

  container.append(testBtn, soloBtn);
  const closeBtn = $('closeModalBtn');
  header.insertBefore(container, closeBtn);
}

function setupModalAccordionHelp() {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent || $('modalHelpAccordion')) return;

  const accordion = document.createElement('div');
  accordion.id = 'modalHelpAccordion';
  accordion.style.cssText = `
    margin-top: 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
  `;

  const cardStyle = `
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 0.8rem;
    color: #475569;
    line-height: 1.35;
  `;

  const titleStyle = `
    display: block;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2px;
  `;

  accordion.innerHTML = `
    <button id="accordionToggleBtn" style="
      width: 100%;
      padding: 10px 14px;
      background: #f7fafc;
      border: none;
      text-align: left;
      font-weight: 600;
      font-size: 0.85rem;
      color: #4a5568;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    ">
      <span>📖 Guide d'édition & Raccourcis clavier</span>
      <span id="accordionArrow">▼</span>
    </button>
    <div id="accordionBody" style="
      display: none;
      padding: 12px;
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
    ">
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
      ">
        <div style="${cardStyle}">
          <span style="${titleStyle}">✏️ Édition & Notes</span>
          <b>Clic :</b> ajouter/supprimer<br>
          <b>Maj + Glisser :</b> lier des notes
        </div>

        <div style="${cardStyle}">
          <span style="${titleStyle}">🎯 Sélection & Déplacement</span>
          <b>Alt + Glisser :</b> sélectionner zone<br>
          <b>Suppr / Backspace :</b> effacer
        </div>

        <div style="${cardStyle}">
          <span style="${titleStyle}">🎛️ Mode Solo</span>
          <b>S :</b> solo unique<br>
          <b>Alt + S :</b> solos multiples
        </div>

        <div style="${cardStyle}">
          <span style="${titleStyle}">📋 Duplication</span>
          <b>Cmd/Ctrl + Maj + D :</b> dupliquer le pattern ou la sélection
        </div>

        <div style="${cardStyle}">
          <span style="${titleStyle}">↩️ Annuler / Rétablir</span>
          <b>Cmd/Ctrl + Z :</b> annuler<br>
          <b>Cmd/Ctrl + Maj + Z :</b> rétablir
        </div>
      </div>
    </div>
  `;

  modalContent.appendChild(accordion);

  const toggleBtn = $('accordionToggleBtn');
  const body = $('accordionBody');
  const arrow = $('accordionArrow');

  toggleBtn.onclick = (e) => {
    const isOpen = body.style.display === 'block';
    body.style.display = isOpen ? 'none' : 'block';
    arrow.textContent = isOpen ? '▼' : '▲';
    if (e.target.blur) e.target.blur();
  };
}

function updateModalHeaderControls() {
  const soloBtn = $('modalSoloBtn');
  if (soloBtn) {
    soloBtn.classList.toggle('active', data[current].solo);
  }
}

let lastScrollTop = null;

function openEditor(id) {
  const isDifferentTrack = (current !== id);
  current = id;
  undoStack = [];
  redoStack = [];
  selectedNotes.clear();
  const c = data[id];
  const inst = INSTRUMENTS.find(i => i.id === id);
  $('modalTitle').textContent = `Édition : ${inst.name}`;

  cleanupHeaderHelpText();
  setupModalHeaderControls();
  updateModalHeaderControls();
  setupModalAccordionHelp();

  [
    ['mix-vol', 'volume'],
    ['mix-pan', 'pan'],
    ['mix-reverb', 'reverb'],
    ['mix-delay', 'delay']
  ].forEach(([id, key]) => $(id).value = c[key] * 100);

  renderGrid();
  $('editorModal').classList.add('open');
  $('editorModal').setAttribute('aria-hidden', 'false');

  initWavePad();
  updateLabels();

  const viewport = $('pianoRollViewport');

  requestAnimationFrame(() => {
    if (isDifferentTrack || lastScrollTop === null) {
      const targetName = inst.voice === 'sub' ? 'La#2' : 'Do3';
      let targetIndex = NOTES.findIndex(n => n.name === targetName);

      if (targetIndex === -1) {
        targetIndex = Math.floor(NOTES.length / 2);
      }

      const rowHeight = 25;
      const viewportHeight = viewport.clientHeight || 280;
      viewport.scrollTop = (targetIndex * rowHeight) - (viewportHeight / 2) + (rowHeight / 2);
    } else {
      viewport.scrollTop = lastScrollTop;
    }
  });

  viewport.onscroll = () => {
    lastScrollTop = viewport.scrollTop;
  };
}

[
  ['mix-vol', 'volume'],
  ['mix-pan', 'pan'],
  ['mix-reverb', 'reverb'],
  ['mix-delay', 'delay']
].forEach(([id, key]) => {
  const el = $(id);
  if (el) {
    el.oninput = event => {
      data[current][key] = Number(event.target.value) / 100;
      updateLabels();
      event.target.blur();
    };
    el.onchange = event => {
      event.target.blur();
    };
  }
});

$('bpmSlider').oninput = event => {
  bpm = Number(event.target.value);
  $('bpmLabel').textContent = `${bpm} BPM`;
  event.target.blur();
};

$('closeModalBtn').onclick = (e) => {
  $('editorModal').classList.remove('open');
  $('editorModal').setAttribute('aria-hidden', 'true');
  renderMainRows();
  if (e.target.blur) e.target.blur();
};

$('editorModal').onclick = event => {
  if (event.target === $('editorModal')) $('closeModalBtn').click();
};

$('playBtn').onclick = (e) => {
  togglePlay();
  e.target.blur();
};

$('clearBtn').onclick = (e) => {
  if (confirm('Effacer toute votre composition actuelle ?')) {
    INSTRUMENTS.forEach(inst => {
      data[inst.id] = initInstrumentData(inst.id);
    });
    renderMainRows();
    if ($('editorModal').classList.contains('open')) {
      renderGrid();
      drawWavePad();
      updateLabels();
      updateModalHeaderControls();
    }
  }
  e.target.blur();
};

const canvas = $('artCanvas'),
      draw = canvas.getContext('2d');

function animate() {
  const box = canvas.getBoundingClientRect(),
        ratio = devicePixelRatio;

  canvas.width = box.width * ratio;
  canvas.height = box.height * ratio;
  draw.setTransform(ratio, 0, 0, ratio, 0, 0);
  draw.clearRect(0, 0, box.width, box.height);
  draw.strokeStyle = 'rgba(90,60,150,.4)';
  draw.lineWidth = 1.5;

  const t = isPlaying ? performance.now() * .001 : 0;

  for (let j = 0; j < 15; j++) {
    draw.beginPath();
    
    // On va un tout petit peu plus loin que le bord droit (+ 10px) pour éviter qu'il manque un bout
    for (let x = 0; x <= box.width + 10; x += 9) {
      const targetX = Math.min(x, box.width); // On plaque le dernier point exactement sur le bord si besoin
      const y = box.height / 2
        + (j - 7) * 6
        + Math.sin(targetX * .008 + t + j * .2) * Math.cos(targetX * .017 - t * .7 + j * .1) * 30;

      if (x === 0) draw.moveTo(targetX, y);
      else draw.lineTo(targetX, y);
    }
    draw.stroke();
  }

  requestAnimationFrame(animate);
}

animate();
setupRecordButton();
renderMainRows();
