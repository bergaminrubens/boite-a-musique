const PRESETS = {
  kick: [
    {
      name: 'Hard Punch Kick',
      desc: 'Attaque tranchante et sub ultra lourd pour un impact max',
      wave: 'triangle',
      drive: 0.28,
      startFreq: 260,
      subFreq: 42,
      dur: 0.32,
      level: 0.95,
      waveX: 0.45,
      waveY: 0.92
    },
    {
      name: 'Sub Destroyer 808',
      desc: 'Basse sub profonde avec distorsion analogique chaude',
      wave: 'sine',
      drive: 0.35,
      startFreq: 180,
      subFreq: 32,
      dur: 0.65,
      level: 0.98,
      waveX: 0.15,
      waveY: 0.98
    },
    {
      name: 'Tight Techno Kick',
      desc: 'Kick sec, rapide et saturé qui traverse parfaitement le mix',
      wave: 'square',
      drive: 0.40,
      startFreq: 320,
      subFreq: 50,
      dur: 0.18,
      level: 0.90,
      waveX: 0.80,
      waveY: 0.75
    },
    {
      name: 'Fat Moog Knock',
      desc: 'Kick très rond avec un médium bien défini et du corps',
      wave: 'triangle',
      drive: 0.22,
      startFreq: 210,
      subFreq: 45,
      dur: 0.28,
      level: 0.92,
      waveX: 0.38,
      waveY: 0.85
    }
  ],

  snare: [
    {
      name: 'Crispy Acoustic Snare',
      desc: 'Caisse claire bois et métal avec attaque croustillante',
      wave: 'triangle',
      bodyFreq: 190,
      noiseDur: 0.12,
      noiseHp: 1150,
      level: 0.62,
      waveX: 0.42,
      waveY: 0.52
    },
    {
      name: 'Dry Studio Snare',
      desc: 'Snare courte, sèche et précise',
      wave: 'sine',
      bodyFreq: 205,
      noiseDur: 0.075,
      noiseHp: 1700,
      level: 0.64,
      waveX: 0.2,
      waveY: 0.25
    },
    {
      name: 'Bright Metal Snare',
      desc: 'Caisse claire brillante avec un joli claquement métallique',
      wave: 'triangle',
      bodyFreq: 285,
      noiseDur: 0.105,
      noiseHp: 2850,
      level: 0.56,
      waveX: 0.72,
      waveY: 0.62
    },
    {
      name: 'Soft Vintage Snare',
      desc: 'Snare chaude et légèrement étouffée façon boîte analogique',
      wave: 'sine',
      bodyFreq: 165,
      noiseDur: 0.14,
      noiseHp: 850,
      level: 0.66,
      waveX: 0.12,
      waveY: 0.7
    }
  ],

  hat: [
    {
      name: 'Tick Metallic Hat',
      desc: 'Charley métallique très ciselé',
      wave: 'square',
      freqs: [330, 510, 760, 980],
      hpFreq: 6200,
      dur: 0.028,
      level: 0.48,
      waveX: 0.7,
      waveY: 0.18
    },
    {
      name: 'Clean Analog Hat',
      desc: 'Hi-hat court et doux avec une texture naturelle',
      wave: 'square',
      freqs: [270, 430, 590, 810],
      hpFreq: 5200,
      dur: 0.035,
      level: 0.5,
      waveX: 0.32,
      waveY: 0.12
    },
    {
      name: 'Bright Open Hat',
      desc: 'Charley ouvert brillant avec une belle queue',
      wave: 'sawtooth',
      freqs: [220, 340, 470, 630],
      hpFreq: 4300,
      dur: 0.38,
      level: 0.43,
      waveX: 0.68,
      waveY: 0.68
    },
    {
      name: 'Soft Tape Hat',
      desc: 'Hi-hat feutré, léger et légèrement granuleux',
      wave: 'triangle',
      freqs: [300, 470, 650],
      hpFreq: 4700,
      dur: 0.065,
      level: 0.54,
      waveX: 0.18,
      waveY: 0.32
    }
  ],

  sub: [
    {
      name: 'Fat Moog Saw Bass',
      desc: 'Basse dent de scie grasse et filtrée',
      wave: 'sawtooth',
      cutoff: 1450,
      attack: 0.012,
      resonance: 5,
      level: 0.48,
      waveX: 0.58,
      waveY: 0.45
    },
    {
      name: 'Deep Moog Sub',
      desc: 'Basse ronde et profonde avec filtre très fermé',
      wave: 'sawtooth',
      cutoff: 620,
      attack: 0.018,
      resonance: 4,
      level: 0.58,
      waveX: 0.2,
      waveY: 0.78
    },
    {
      name: 'Rubber Synth Bass',
      desc: 'Basse souple et rebondissante avec attaque courte',
      wave: 'square',
      cutoff: 1850,
      attack: 0.004,
      resonance: 3,
      level: 0.43,
      waveX: 0.72,
      waveY: 0.3
    },
    {
      name: 'Warm Juno Bass',
      desc: 'Basse analogique douce et légèrement brillante',
      wave: 'triangle',
      cutoff: 2300,
      attack: 0.015,
      resonance: 6,
      level: 0.5,
      waveX: 0.4,
      waveY: 0.52
    }
  ],

  kalimba: [
    {
      name: 'Wood Block Perc',
      desc: 'Percussion bois percutante et sèche',
      wave: 'square',
      harmonicRatio: 2.4,
      decay: 0.075,
      noiseAmt: 0.22,
      level: 0.48,
      waveX: 0.62,
      waveY: 0.12
    },
    {
      name: 'Soft Kalimba',
      desc: 'Lamelles boisées douces et rondes',
      wave: 'sine',
      harmonicRatio: 1.0,
      decay: 0.24,
      noiseAmt: 0.025,
      level: 0.56,
      waveX: 0.12,
      waveY: 0.25
    },
    {
      name: 'Bright Thumb Piano',
      desc: 'Kalimba claire avec attaque légèrement métallique',
      wave: 'triangle',
      harmonicRatio: 2.7,
      decay: 0.3,
      noiseAmt: 0.08,
      level: 0.49,
      waveX: 0.58,
      waveY: 0.58
    },
    {
      name: 'Deep Wooden Tines',
      desc: 'Lamelles graves avec résonance chaleureuse',
      wave: 'sine',
      harmonicRatio: 0.68,
      decay: 0.7,
      noiseAmt: 0.018,
      level: 0.52,
      waveX: 0.24,
      waveY: 0.82
    }
  ],

  pluck: [
    {
      name: 'FM Psych Guitar',
      desc: 'Pluck métallique type sitar et guitare FM',
      wave: 'sawtooth',
      fmRatio: 3.7,
      fmMod: 4.8,
      level: 0.42,
      waveX: 0.82,
      waveY: 0.82
    },
    {
      name: 'Nylon Guitar Pluck',
      desc: 'Corde nylon douce avec attaque naturelle',
      wave: 'sine',
      fmRatio: 1.0,
      fmMod: 0.12,
      level: 0.56,
      waveX: 0.08,
      waveY: 0.16
    },
    {
      name: 'Electric Pluck',
      desc: 'Corde électrique brillante et courte',
      wave: 'triangle',
      fmRatio: 2.0,
      fmMod: 1.2,
      level: 0.5,
      waveX: 0.58,
      waveY: 0.38
    },
    {
      name: 'Glass Pluck',
      desc: 'Pluck cristallin avec une belle brillance FM',
      wave: 'sine',
      fmRatio: 4.2,
      fmMod: 3.5,
      level: 0.43,
      waveX: 0.9,
      waveY: 0.62
    }
  ],

  rhodes: [
    {
      name: 'Warm Chorus Rhodes',
      desc: 'Piano Rhodes chaud avec chorus',
      wave: 'triangle',
      tineRatio: 2.0,
      tineVol: 0.3,
      release: 0.85,
      level: 0.48,
      waveX: 0.32,
      waveY: 0.5
    },
    {
      name: 'Classic Suitcase Rhodes',
      desc: 'Rhodes rond et velouté façon suitcase',
      wave: 'sine',
      tineRatio: 2.2,
      tineVol: 0.18,
      release: 0.95,
      level: 0.54,
      waveX: 0.2,
      waveY: 0.42
    },
    {
      name: 'Bright Tine Rhodes',
      desc: 'Rhodes plus brillant avec attaque métallique',
      wave: 'triangle',
      tineRatio: 5.2,
      tineVol: 0.58,
      release: 0.6,
      level: 0.43,
      waveX: 0.72,
      waveY: 0.3
    },
    {
      name: 'Dirty Rhodes Amp',
      desc: 'Rhodes chaud légèrement poussé dans un ampli',
      wave: 'sawtooth',
      tineRatio: 3.0,
      tineVol: 0.5,
      release: 0.7,
      level: 0.38,
      waveX: 0.68,
      waveY: 0.72
    }
  ],

  brass: [
    {
      name: 'Brass Synth 80s',
      desc: 'Cuivres synthétiques ouverts et puissants',
      wave: 'sawtooth',
      detune: 12,
      attack: 0.035,
      level: 0.43,
      waveX: 0.58,
      waveY: 0.62
    },
    {
      name: 'Soft Synth Horn',
      desc: 'Cuivre chaud et rond avec attaque progressive',
      wave: 'triangle',
      detune: 5,
      attack: 0.09,
      level: 0.5,
      waveX: 0.25,
      waveY: 0.3
    },
    {
      name: 'Bright Trumpet Synth',
      desc: 'Trompette synthétique claire et expressive',
      wave: 'square',
      detune: 7,
      attack: 0.008,
      level: 0.42,
      waveX: 0.78,
      waveY: 0.22
    },
    {
      name: 'Warm Brass Chord',
      desc: 'Cuivres larges et chaleureux pour accords',
      wave: 'sawtooth',
      detune: 16,
      attack: 0.06,
      level: 0.37,
      waveX: 0.45,
      waveY: 0.7
    }
  ],

  bell: [
    {
      name: 'FM Crystal Bells',
      desc: 'Cloches FM brillantes et cristallines',
      wave: 'sine',
      fmRatio: 2.75,
      modDepth: 3.8,
      decayMult: 2.4,
      level: 0.43,
      waveX: 0.18,
      waveY: 0.34
    },
    {
      name: 'Soft Bronze Bell',
      desc: 'Cloche chaude avec une longue résonance',
      wave: 'sine',
      fmRatio: 1.45,
      modDepth: 1.4,
      decayMult: 3.4,
      level: 0.48,
      waveX: 0.18,
      waveY: 0.68
    },
    {
      name: 'Music Box Bell',
      desc: 'Petite cloche de boîte à musique délicate',
      wave: 'triangle',
      fmRatio: 4.1,
      modDepth: 1.0,
      decayMult: 0.75,
      level: 0.45,
      waveX: 0.48,
      waveY: 0.08
    },
    {
      name: 'Metallic Bell',
      desc: 'Cloche métallique claire avec attaque précise',
      wave: 'triangle',
      fmRatio: 5.8,
      modDepth: 5.0,
      decayMult: 1.4,
      level: 0.38,
      waveX: 0.84,
      waveY: 0.72
    }
  ],

  flute: [
    {
      name: 'Breath Tape Flute',
      desc: 'Flûte avec souffle de bande et vibrato',
      wave: 'sine',
      vibratoFreq: 3.0,
      noiseAmt: 0.28,
      level: 0.5,
      waveX: 0.24,
      waveY: 0.52
    },
    {
      name: 'Warm Bamboo Flute',
      desc: 'Flûte ronde et naturelle avec peu de souffle',
      wave: 'sine',
      vibratoFreq: 2.1,
      noiseAmt: 0.07,
      level: 0.55,
      waveX: 0.08,
      waveY: 0.22
    },
    {
      name: 'Airy Wooden Flute',
      desc: 'Flûte douce riche en air et en texture',
      wave: 'triangle',
      vibratoFreq: 3.7,
      noiseAmt: 0.38,
      level: 0.44,
      waveX: 0.38,
      waveY: 0.62
    },
    {
      name: 'Soft Synth Whistle',
      desc: 'Sifflement synthétique léger avec vibrato',
      wave: 'triangle',
      vibratoFreq: 5.5,
      noiseAmt: 0.04,
      level: 0.47,
      waveX: 0.72,
      waveY: 0.38
    }
  ],

  pad: [
    {
      name: 'Stereo Warm Pad',
      desc: 'Nappe ultra-large en chorus',
      wave: 'triangle',
      detune: 8,
      cutoff: 2600,
      attack: 0.38,
      level: 0.34,
      waveX: 0.35,
      waveY: 0.55
    },
    {
      name: 'Soft Analog Pad',
      desc: 'Nappe douce et chaude avec filtre fermé',
      wave: 'sine',
      detune: 3,
      cutoff: 900,
      attack: 0.8,
      level: 0.43,
      waveX: 0.08,
      waveY: 0.18
    },
    {
      name: 'Dreamy Juno Pad',
      desc: 'Nappe analogique large et légèrement brillante',
      wave: 'sawtooth',
      detune: 10,
      cutoff: 3400,
      attack: 0.5,
      level: 0.31,
      waveX: 0.55,
      waveY: 0.52
    },
    {
      name: 'Glass Air Pad',
      desc: 'Nappe aérienne et lumineuse avec beaucoup d’espace',
      wave: 'triangle',
      detune: 14,
      cutoff: 5600,
      attack: 0.65,
      level: 0.28,
      waveX: 0.86,
      waveY: 0.72
    }
  ]
};

// Initialisation des instruments
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

// État des tiroirs ouverts
let openDrawers = {};

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

const STEPS_COUNT = 64;

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
    eqLow: 0,   // dB (-12 à +12)
    eqMid: 0,   // dB (-12 à +12)
    eqHigh: 0,  // dB (-12 à +12)
    solo: false,
    mute: false
  };
}

INSTRUMENTS.forEach(i => data[i.id] = initInstrumentData(i.id));

// 1. Recherche des index des notes repères (Do2 pour le Kick)
const DO2_INDEX = NOTES.findIndex(n => n.name === 'Do2');
const DO3_INDEX = NOTES.findIndex(n => n.name === 'Do3');
const LA_SHARP_3_INDEX = NOTES.findIndex(n => n.name === 'La#3');

// 2. Définition des notes par défaut
const KICK_DEFAULT_INDEX = DO2_INDEX !== -1 ? DO2_INDEX : 0; // Pointe sur Do2
const BASS_DEFAULT_INDEX = LA_SHARP_3_INDEX !== -1 ? LA_SHARP_3_INDEX : NOTES.length - 1;
const DEFAULT_NOTE_INDEX = DO3_INDEX !== -1 ? DO3_INDEX : Math.floor(NOTES.length / 2);

// 3. Application du motif initial
[
  [0, KICK_DEFAULT_INDEX, [0, 8, 16, 24, 32, 40, 48, 56]],
  [1, DEFAULT_NOTE_INDEX, [8, 24, 40, 56]],
  [2, DEFAULT_NOTE_INDEX, [
    0, 2, 4, 6, 8, 10, 12, 14,
    16, 18, 20, 22, 24, 26, 28, 30,
    32, 34, 36, 38, 40, 42, 44, 46,
    48, 50, 52, 54, 56, 58, 60, 62
  ]],
  [3, BASS_DEFAULT_INDEX, [0, 6, 12, 16, 22, 28, 32, 38, 44, 48, 54, 60]],
  [4, DEFAULT_NOTE_INDEX - 2, [4, 12, 20, 28, 36, 44, 52, 60]],
  [5, DEFAULT_NOTE_INDEX - 4, [0, 6, 10, 16, 22, 26, 32, 38, 42, 48, 54, 58]],
  [6, DEFAULT_NOTE_INDEX - 5, [0, 14, 16, 30, 32, 46, 48, 62]]
].forEach(([instIndex, noteIndex, steps]) => {
  const instId = INSTRUMENTS[instIndex]?.id;

  if (
    noteIndex >= 0 &&
    data[instId] &&
    data[instId].grid[NOTES[noteIndex]?.id]
  ) {
    steps.forEach(
      s => data[instId].grid[NOTES[noteIndex].id][s] = 1
    );
  }
});

let audio, master, limiter, impulse, recorderProcessor, audioBuffersLeft = [], audioBuffersRight = [],
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
    isDraggingWavePad = false,
    isDraggingEQPad = false,
    activeEQBand = null;

// BUS D'EFFETS GLOBAUX
let globalReverbNode, globalReverbGain;
let globalDelayNode, globalDelayFeedback, globalDelayGain;

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
    audio = new (window.AudioContext || window.webkitAudioContext)({
      latencyHint: 'playback'
    });

    // =========================
    // MASTER COMPRESSOR
    // =========================
    master = audio.createDynamicsCompressor();

    master.threshold.value = -12;
    master.knee.value = 8;
    master.ratio.value = 2.5;
    master.attack.value = 0.015;
    master.release.value = 0.18;


    // =========================
    // MASTER LIMITER
    // =========================
    limiter = audio.createDynamicsCompressor();

    limiter.threshold.value = -1;
    limiter.knee.value = 0;
    limiter.ratio.value = 20;
    limiter.attack.value = 0.001;
    limiter.release.value = 0.08;


    // Chaîne finale
    master.connect(limiter);
    limiter.connect(audio.destination);

    // Reverb longue conservée : 2.2 secondes
    impulse = noise(2.2);

    globalReverbNode = audio.createConvolver();
    globalReverbNode.buffer = impulse;

    globalReverbGain = audio.createGain();
    globalReverbGain.gain.setValueAtTime(1.0, audio.currentTime);

    globalReverbNode.connect(globalReverbGain);
    globalReverbGain.connect(master);

    globalDelayNode = audio.createDelay(.8);
    globalDelayFeedback = audio.createGain();
    globalDelayGain = audio.createGain();

    globalDelayFeedback.gain.setValueAtTime(.35, audio.currentTime);
    globalDelayGain.gain.setValueAtTime(1.0, audio.currentTime);

    globalDelayNode.connect(globalDelayFeedback);
    globalDelayFeedback.connect(globalDelayNode);
    globalDelayNode.connect(globalDelayGain);
    globalDelayGain.connect(master);

    // Synchronise le delay avec le BPM actuel
    updateDelayFromBpm();
  }

  if (audio.state === 'suspended') audio.resume();
}


function noise(seconds = .3) {
  const buffer = audio.createBuffer(
    1,
    Math.ceil(audio.sampleRate * seconds),
    audio.sampleRate
  );

  const values = buffer.getChannelData(0);

  for (let i = 0; i < values.length; i++) {
    const t = i / values.length;

    // Décroissance progressive du bruit sur toute la durée
    const envelope = Math.pow(1 - t, 3);

    values[i] = (Math.random() * 2 - 1) * envelope;
  }

  return buffer;
}

function updateDelayFromBpm() {
  if (!audio || !globalDelayNode) return;

  // Delay = 1/2 temps (croche)
  const delayTime = (60 / bpm) / 2;

  globalDelayNode.delayTime.setTargetAtTime(
    delayTime,
    audio.currentTime,
    0.01
  );
}

function makeOutput(c, time, maxDuration = 2.0) {
  const dry = audio.createGain();

  // ÉGALISEUR 3 BANDES
  const eqLow = audio.createBiquadFilter();
  eqLow.type = 'lowshelf';
  eqLow.frequency.setValueAtTime(250, time);
  eqLow.gain.setValueAtTime(c.eqLow ?? 0, time);

  const eqMid = audio.createBiquadFilter();
  eqMid.type = 'peaking';
  eqMid.frequency.setValueAtTime(1500, time);
  eqMid.Q.setValueAtTime(1.0, time);
  eqMid.gain.setValueAtTime(c.eqMid ?? 0, time);

  const eqHigh = audio.createBiquadFilter();
  eqHigh.type = 'highshelf';
  eqHigh.frequency.setValueAtTime(4500, time);
  eqHigh.gain.setValueAtTime(c.eqHigh ?? 0, time);

  const autoLevel = createAutoLevel();
  const pan = audio.createStereoPanner();

  dry.connect(eqLow);
  eqLow.connect(eqMid);
  eqMid.connect(eqHigh);
  eqHigh.connect(autoLevel.analyser);
  autoLevel.analyser.connect(autoLevel.gain);
  autoLevel.gain.connect(pan);
  pan.connect(master);

  pan.pan.setValueAtTime(c.pan ?? 0, time);

  const cleanupNodes = [
    dry,
    eqLow,
    eqMid,
    eqHigh,
    autoLevel.analyser,
    autoLevel.gain,
    pan
  ];

  if (c.reverb > 0) {
    const revSend = audio.createGain();

    revSend.gain.setValueAtTime(
      c.reverb * 0.4,
      time
    );

    dry.connect(revSend);
    revSend.connect(globalReverbNode);

    cleanupNodes.push(revSend);
  }

  if (c.delay > 0) {
    const delaySend = audio.createGain();

    delaySend.gain.setValueAtTime(
      c.delay * 0.4,
      time
    );

    dry.connect(delaySend);
    delaySend.connect(globalDelayNode);

    cleanupNodes.push(delaySend);
  }

  startAutoLevel(
    autoLevel,
    time,
    maxDuration
  );

  setTimeout(() => {
    cleanupNodes.forEach(node => {
      try {
        node.disconnect();
      } catch (e) {}
    });
  }, (maxDuration + 0.5) * 1000);

  return dry;
}

function envelope(gain, peak, time, attack, release) {
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(Math.max(0.0001, peak), time + attack);
  const holdTime = Math.max(0.01, release - 0.04);
  gain.gain.setValueAtTime(peak, time + attack + holdTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + attack + release);
}

function createAutoLevel() {
  const analyser = audio.createAnalyser();
  const gain = audio.createGain();

  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.15;

  // Gain initial neutre
  gain.gain.value = 1.0;

  return {
    analyser,
    gain,
    data: new Float32Array(analyser.fftSize)
  };
}

function startAutoLevel(leveler, time, duration) {
  const targetRms = 0.115;
  const minGain = 0.35;
  const maxGain = 2.5;

  const analyser = leveler.analyser;
  const gain = leveler.gain;
  const data = leveler.data;

  const start = performance.now();

  function measure() {
    if (!analyser || !gain) return;

    analyser.getFloatTimeDomainData(data);

    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      sum += data[i] * data[i];
    }

    const rms = Math.sqrt(sum / data.length);

    if (rms > 0.0005) {
      // Ratio de niveau réel mesuré / niveau cible
      const correction = targetRms / rms;

      // Correction très progressive pour éviter les pompages
      const current = gain.gain.value;
      const next = current * Math.pow(correction, 0.18);

      gain.gain.setTargetAtTime(
        Math.max(minGain, Math.min(maxGain, next)),
        audio.currentTime,
        0.025
      );
    }

    if (performance.now() - start < (duration + 0.25) * 1000) {
      requestAnimationFrame(measure);
    }
  }

  requestAnimationFrame(measure);
}

function getPresetOutputLevel(inst, preset) {
  const baseLevels = {
    kick:    0.85,
    snare:   0.34,
    hat:     0.40,
    sub:     0.32,
    kalimba: 0.34,
    pluck:   0.30,
    rhodes:  0.28,
    brass:   0.25,
    bell:    0.28,
    flute:   0.30,
    pad:     0.20
  };

  const base = baseLevels[inst.voice] ?? 0.30;
  const presetLevel = preset.level ?? 0.5;
  const levelFactor = presetLevel * 2.0;

  return base * levelFactor;
}

function playNote(inst, freq, time, duration, forcePlay = false) {
  const config = data[inst.id];

  if (!forcePlay) {
    if (config.mute) return;
    const hasSolo = INSTRUMENTS.some(i => data[i.id].solo);
    if (hasSolo && !config.solo) return;
  }

  // 1. Récupération du preset
  const voicePresets = PRESETS[inst.voice] || [];
  const preset = voicePresets.find(p => p.name === inst.name) || voicePresets[0] || {};

  // 2. Récupération des coordonnées Morphing (définies par le pad ou le preset)
  const wx = config.waveX !== undefined ? config.waveX : (preset.waveX ?? 0.2);
  const wy = config.waveY !== undefined ? config.waveY : (preset.waveY ?? 0.2);

  // 3. Calcul dynamique de l'onde (sur l'axe X) et du filtre (sur l'axe Y)
  let waveType = 'sine';
  if (wx >= 0.25 && wx < 0.5) waveType = 'triangle';
  else if (wx >= 0.5 && wx < 0.75) waveType = 'sawtooth';
  else if (wx >= 0.75) waveType = 'square';

  const cutoffFreq = 200 + Math.pow(wy, 2) * 11800; // Ouverture logarithmique de 200Hz à 12kHz

  const len = Math.max(.12, duration),
        out = makeOutput(config, time, len + 1.5),
        v = getPerceivedVolume(config.volume);

  const presetLevel = getPresetOutputLevel(inst, preset);
  const finalLevel = v * presetLevel;

  // 1. KICK (Fréquence basée sur le pitch de la note)
  if (inst.voice === 'kick') {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const drive = audio.createWaveShaper();

    const k = (preset.drive || (0.1 + wy * 0.4)) * 20;
    const curve = new Float32Array(44100);
    for (let i = 0; i < 44100; i++) {
      let x = (i * 2) / 44100 - 1;
      curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
    }
    drive.curve = curve;

    osc.type = waveType;
    const startF = freq * 2.5;
    const subF = freq * 0.75;

    osc.frequency.setValueAtTime(startF, time);
    osc.frequency.exponentialRampToValueAtTime(subF, time + (preset.dur || 0.15));

    const dur = preset.dur || 0.2;
    gain.gain.setValueAtTime(finalLevel * 1.8, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

    osc.connect(drive);
    drive.connect(gain);
    gain.connect(out);

    osc.start(time);
    osc.stop(time + dur + 0.01);
    return;
  }

  // 2. SNARE (Pitch dépendant de la note)
  if (inst.voice === 'snare') {
    const body = audio.createOscillator();
    const bodyGain = audio.createGain();
    body.type = waveType;
    body.frequency.setValueAtTime(freq, time);
    body.frequency.exponentialRampToValueAtTime(Math.max(30, freq * 0.4), time + 0.04);
    
    envelope(bodyGain, finalLevel * 0.9, time, 0.001, 0.06);
    body.connect(bodyGain);
    bodyGain.connect(out);
    body.start(time);
    body.stop(time + 0.08);

    const noiseSrc = audio.createBufferSource();
    const hpFilter = audio.createBiquadFilter();
    const noiseGain = audio.createGain();
    
    const noiseDur = preset.noiseDur || 0.15;
    noiseSrc.buffer = noise(noiseDur + 0.1);
    hpFilter.type = 'highpass';
    hpFilter.frequency.setValueAtTime(cutoffFreq, time);

    envelope(noiseGain, finalLevel * 0.8, time, 0.001, noiseDur);
    noiseSrc.connect(hpFilter);
    hpFilter.connect(noiseGain);
    noiseGain.connect(out);
    
    noiseSrc.start(time);
    noiseSrc.stop(time + noiseDur + 0.02);
    return;
  }

  // 3. HAT (Hauteur dépendant de la note)
  if (inst.voice === 'hat') {
    const ratios = [1.0, 1.48, 1.8, 2.54];
    const hatGain = audio.createGain();
    const hp = audio.createBiquadFilter();
    
    hp.type = 'highpass';
    hp.frequency.setValueAtTime(cutoffFreq, time);

    const hatDur = preset.dur || (0.03 + wx * 0.08);

    ratios.forEach(r => {
      const osc = audio.createOscillator();
      osc.type = waveType;
      osc.frequency.setValueAtTime(freq * r * 4, time);
      osc.connect(hp);
      osc.start(time);
      osc.stop(time + hatDur);
    });

    envelope(hatGain, finalLevel * 0.5, time, 0.001, hatDur);
    hp.connect(hatGain);
    hatGain.connect(out);
    return;
  }

  // 4. SUB
  if (inst.voice === 'sub') {
    const osc = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoffFreq, time);
    if (preset.resonance) filter.Q.setValueAtTime(preset.resonance, time);

    envelope(gain, finalLevel * 0.95, time, preset.attack || 0.005, len);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc.start(time);
    osc.stop(time + len + 0.05);
    return;
  }

  // 5. KALIMBA / PERCUSSION
  if (inst.voice === 'kalimba') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const gain = audio.createGain();

    osc1.type = waveType;
    osc1.frequency.setValueAtTime(freq, time);

    const ratio = preset.harmonicRatio !== undefined ? preset.harmonicRatio : (1.5 + wx * 3);
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * ratio, time);

    const decay = preset.decay || (0.1 + wy * 0.4);

    if ((preset.noiseAmt || wy * 0.2) > 0) {
      const nSrc = audio.createBufferSource();
      const nGain = audio.createGain();
      nSrc.buffer = noise(decay);
      envelope(nGain, finalLevel * (preset.noiseAmt || wy * 0.15), time, 0.001, 0.02);
      nSrc.connect(nGain);
      nGain.connect(out);
      nSrc.start(time);
      nSrc.stop(time + 0.03);
    }

    envelope(gain, finalLevel * 0.8, time, 0.001, decay);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + decay + 0.02); osc2.stop(time + decay + 0.02);
    return;
  }

  // 6. PLUCK
  if (inst.voice === 'pluck') {
    const carrier = audio.createOscillator();
    const modulator = audio.createOscillator();
    const modGain = audio.createGain();
    const gain = audio.createGain();

    carrier.type = waveType;
    modulator.type = 'sine';

    const ratio = preset.fmRatio || (1 + wx * 4);
    const modDepth = preset.fmMod || (0.5 + wy * 5);

    carrier.frequency.setValueAtTime(freq, time);
    modulator.frequency.setValueAtTime(freq * ratio, time);

    modGain.gain.setValueAtTime(freq * modDepth, time);
    modGain.gain.exponentialRampToValueAtTime(0.1, time + 0.05);

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    envelope(gain, finalLevel * 0.8, time, 0.001, len * 0.5);
    carrier.connect(gain);
    gain.connect(out);

    carrier.start(time); modulator.start(time);
    carrier.stop(time + len + 0.05); modulator.stop(time + len + 0.05);
    return;
  }

  // 7. RHODES
  if (inst.voice === 'rhodes') {
    const fundamental = audio.createOscillator();
    const tine = audio.createOscillator();
    const gain = audio.createGain();
    const tineGain = audio.createGain();

    fundamental.type = waveType;
    fundamental.frequency.setValueAtTime(freq, time);

    const tineRatio = preset.tineRatio || (2 + wx * 4);
    tine.type = 'triangle';
    tine.frequency.setValueAtTime(freq * tineRatio, time);

    const tineVol = preset.tineVol !== undefined ? preset.tineVol : wy;
    const release = preset.release || 0.4;

    envelope(gain, finalLevel * 0.75, time, 0.004, len * release);
    envelope(tineGain, finalLevel * tineVol, time, 0.001, 0.05);

    fundamental.connect(gain);
    tine.connect(tineGain);

    gain.connect(out);
    tineGain.connect(out);

    fundamental.start(time); tine.start(time);
    fundamental.stop(time + len + 0.05); tine.stop(time + 0.08);
    return;
  }

  // 8. BRASS
  if (inst.voice === 'brass') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = waveType;
    osc2.type = 'sawtooth';

    const detune = preset.detune || (2 + wx * 20);
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * Math.pow(2, detune / 1200), time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 1.2, time);
    filter.frequency.exponentialRampToValueAtTime(Math.min(14000, cutoffFreq), time + 0.04);

    envelope(gain, finalLevel * 0.7, time, preset.attack || 0.02, len);

    osc1.connect(filter); osc2.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + len + 0.05); osc2.stop(time + len + 0.05);
    return;
  }

  // 9. BELL
  if (inst.voice === 'bell') {
    const carrier = audio.createOscillator();
    const modulator = audio.createOscillator();
    const modGain = audio.createGain();
    const gain = audio.createGain();

    carrier.type = waveType;
    modulator.type = 'sine';

    const ratio = preset.fmRatio || (1.4 + wx * 2);
    const depth = preset.modDepth || (1.0 + wy * 6);
    const decayMult = preset.decayMult || 1.0;

    carrier.frequency.setValueAtTime(freq, time);
    modulator.frequency.setValueAtTime(freq * ratio, time);

    modGain.gain.setValueAtTime(freq * depth, time);
    modGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1 * decayMult);

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    envelope(gain, finalLevel * 0.7, time, 0.001, len * decayMult);
    carrier.connect(gain);
    gain.connect(out);

    carrier.start(time); modulator.start(time);
    carrier.stop(time + len * decayMult + 0.1); modulator.stop(time + len * decayMult + 0.1);
    return;
  }

  // 10. FLUTE
  if (inst.voice === 'flute') {
    const osc = audio.createOscillator();
    const vibrato = audio.createOscillator();
    const vibratoGain = audio.createGain();
    const gain = audio.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, time);

    vibrato.frequency.setValueAtTime(preset.vibratoFreq || (3 + wx * 6), time);
    vibratoGain.gain.setValueAtTime(freq * (0.005 + wy * 0.02), time);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    const noiseAmt = preset.noiseAmt ?? (0.05 + wy * 0.25);
    if (noiseAmt > 0) {
      const breath = audio.createBufferSource();
      const breathFilter = audio.createBiquadFilter();
      const breathGain = audio.createGain();
      breath.buffer = noise(len + 0.1);
      breathFilter.type = 'bandpass';
      breathFilter.frequency.setValueAtTime(freq * 2, time);
      breathFilter.Q.value = 3;
      envelope(breathGain, finalLevel * noiseAmt, time, 0.02, len);
      breath.connect(breathFilter);
      breathFilter.connect(breathGain);
      breathGain.connect(out);
      breath.start(time);
      breath.stop(time + len + 0.05);
    }

    envelope(gain, finalLevel * 0.8, time, 0.03, len);
    osc.connect(gain);
    gain.connect(out);

    osc.start(time); vibrato.start(time);
    osc.stop(time + len + 0.05); vibrato.stop(time + len + 0.05);
    return;
  }

  // 11. PAD
  if (inst.voice === 'pad') {
    const osc1 = audio.createOscillator();
    const osc2 = audio.createOscillator();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();

    osc1.type = waveType;
    osc2.type = 'sawtooth';

    const detune = preset.detune || (2 + wx * 15);
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * Math.pow(2, detune / 1200), time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoffFreq, time);
    if (preset.resonance) filter.Q.setValueAtTime(preset.resonance, time);

    envelope(gain, finalLevel * 0.6, time, preset.attack || 0.1, len * 1.3);

    osc1.connect(filter); osc2.connect(filter);
    filter.connect(gain);
    gain.connect(out);

    osc1.start(time); osc2.start(time);
    osc1.stop(time + len + 0.3); osc2.stop(time + len + 0.3);
    return;
  }
}

function playCurrentInstrumentSound(forcePlay = true) {
  initAudio();
  const inst = INSTRUMENTS.find(i => i.id === current);
  if (!inst) return;

  const targetNotes = {
    kick: 'Do2',
    sub: 'Do2',
    snare: 'Do3',
    hat: 'Do4',
    kalimba: 'Do4',
    pluck: 'Do4',
    rhodes: 'Do3',
    brass: 'Do3',
    bell: 'Do5',
    flute: 'Do4',
    pad: 'Do3'
  };

  const targetNoteName = targetNotes[inst.voice] || 'Do3';
  const note = NOTES.find(n => n.name === targetNoteName) || NOTES.find(n => n.name === 'Do3');

  playNote(inst, note.freq, audio.currentTime, 0.4, forcePlay);
}

function scheduler() {
  if (!isPlaying) return;
  while (nextStepTime < audio.currentTime + .10) {
    scheduleStep(currentStep, nextStepTime);
    currentStep = (currentStep + 1) % STEPS_COUNT;
    nextStepTime += (60 / bpm / 4) / 2;
  }
  timerID = setTimeout(scheduler, 25);
}

function scheduleStep(step, time) {
  if (pendingRecording && step === 0) {
    pendingRecording = false;
    startAudioRecording();
  }

  const hasSolo = INSTRUMENTS.some(i => data[i.id].solo);

  for (let i = 0; i < INSTRUMENTS.length; i++) {
    const inst = INSTRUMENTS[i];
    const trackData = data[inst.id];
    
    if (trackData.mute || (hasSolo && !trackData.solo)) continue;

    for (let j = 0; j < NOTES.length; j++) {
      const note = NOTES[j];
      const line = trackData.grid[note.id];
      if (!line || line[step] !== 1) continue;

      let blocks = 1;
      while ((step + blocks) % STEPS_COUNT !== 0 && line[(step + blocks) % STEPS_COUNT] === 2) {
        blocks++;
      }
      playNote(inst, note.freq, time, blocks * ((60 / bpm / 4) / 2), true);
    }
  }

  requestAnimationFrame(() => {
    document.querySelectorAll(`[data-step="${step}"]`).forEach(cell => {
      cell.classList.add('playing');
      setTimeout(() => cell.classList.remove('playing'), 90);
    });
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

    if (isRecording) {
      stopAudioRecording();
    }

    pendingRecording = false;
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

  // Enregistre le signal APRÈS le compresseur + limiteur
  limiter.connect(recorderProcessor);
  recorderProcessor.connect(audio.destination);

  recorderProcessor.onaudioprocess = (e) => {
    if (!isRecording) return;

    audioBuffersLeft.push(
      new Float32Array(e.inputBuffer.getChannelData(0))
    );

    audioBuffersRight.push(
      new Float32Array(e.inputBuffer.getChannelData(1))
    );
  };

  isRecording = true;

  const recBtn = $('recordBtn');

  recBtn.innerHTML =
    `<span style="color: #fff; font-size: 0.8rem;">■</span> Enregistrement en cours...`;

  recBtn.style.background = '#e53e3e';
  recBtn.style.color = '#ffffff';
}

function stopAudioRecording() {
  isRecording = false;

  if (recorderProcessor) {
    recorderProcessor.disconnect();

    // On déconnecte le limiteur, pas le master
    limiter.disconnect(recorderProcessor);

    recorderProcessor = null;
  }

  // Crée et télécharge le WAV immédiatement
  if (audioBuffersLeft.length > 0) {
    const wavBlob = createWavBlob(
      audioBuffersLeft,
      audioBuffersRight,
      audio.sampleRate
    );

    const url = URL.createObjectURL(wavBlob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `sequenceur-composition-${Date.now()}.wav`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }

  const recBtn = $('recordBtn');

  if (recBtn) {
    recBtn.innerHTML =
      `<span style="color: #e53e3e; font-size: 0.8rem;">●</span> Enregistrer WAV`;

    recBtn.style.background = '#ffffff';
    recBtn.style.color = '#4a5568';
  }
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
  
  const gridContainer = $('gridContainer');
  gridContainer.innerHTML = '';

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

  const fragment = document.createDocumentFragment();

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
    fragment.append(row);
  });

  gridContainer.append(fragment);
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

function initEQPad() {
  let eqContainer = $('eqPadContainer');
  if (!eqContainer) {
    const mixerPanel = document.querySelector('.mixer-panel');
    eqContainer = document.createElement('div');
    eqContainer.id = 'eqPadContainer';
    eqContainer.style.cssText = `
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
    eqContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
        <span>Égaliseur 3 Bandes (EQ)</span>
        <span id="val-eq" style="color: var(--text-muted);">G: 0dB | M: 0dB | A: 0dB</span>
      </div>
      <div style="position: relative; width: 100%; height: 110px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e0; overflow: hidden; cursor: crosshair;">
        <canvas id="eqCanvas" style="width: 100%; height: 100%; display: block;"></canvas>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: #718096; font-weight: bold; padding: 0 4px;">
        <span>Graves (250Hz)</span><span>Médiums (1.5kHz)</span><span>Aigus (4.5kHz)</span>
      </div>
    `;
    mixerPanel.append(eqContainer);

    const canvas = $('eqCanvas');

    const updateFromEvent = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));

      // Conversion y (0..1) vers dB (-12 à +12)
      const dbVal = Math.round((y - 0.5) * 24);

      if (!activeEQBand) {
        if (x < 0.33) activeEQBand = 'eqLow';
        else if (x < 0.66) activeEQBand = 'eqMid';
        else activeEQBand = 'eqHigh';
      }

      data[current][activeEQBand] = dbVal;
      drawEQPad();
      updateLabels();
    };

    const handleStart = (e) => {
      isDraggingEQPad = true;
      activeEQBand = null;
      updateFromEvent(e);
    };

    canvas.onmousedown = (e) => handleStart(e);
    window.addEventListener('mousemove', (e) => { if (isDraggingEQPad) updateFromEvent(e); });
    window.addEventListener('mouseup', () => {
  if (isDraggingEQPad) {
    eqWasDraggingOutside = true;
  }

  isDraggingEQPad = false;
  activeEQBand = null;
});

    canvas.ontouchstart = (e) => handleStart(e.touches[0]);
    window.addEventListener('touchmove', (e) => { if (isDraggingEQPad) updateFromEvent(e.touches[0]); });
    window.addEventListener('touchend', () => { isDraggingEQPad = false; activeEQBand = null; });
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      drawEQPad();
    });
  });
}

function drawEQPad() {
  const canvas = $('eqCanvas');
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;

  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const c = data[current];
  const lowVal = c.eqLow ?? 0;
  const midVal = c.eqMid ?? 0;
  const highVal = c.eqHigh ?? 0;

  // Ligne de référence à 0 dB (au centre)
  ctx.strokeStyle = '#cbd5e0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.setLineDash([3, 3]);
  ctx.moveTo(0, rect.height / 2);
  ctx.lineTo(rect.width, rect.height / 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Lignes de séparation de zones
  [0.33, 0.66].forEach(ratio => {
    ctx.beginPath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.moveTo(rect.width * ratio, 0);
    ctx.lineTo(rect.width * ratio, rect.height);
    ctx.stroke();
  });

  const getY = (db) => rect.height / 2 - (db / 12) * (rect.height / 2) * 0.8;

  const xLow = rect.width * 0.16;
  const xMid = rect.width * 0.5;
  const xHigh = rect.width * 0.84;

  const yLow = getY(lowVal);
  const yMid = getY(midVal);
  const yHigh = getY(highVal);

  const inst = INSTRUMENTS.find(i => i.id === current);
  const color = inst ? inst.color : '#3182ce';

  // Tracé de la courbe globale d'EQ
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, yLow);
  ctx.bezierCurveTo(xLow, yLow, xLow, yLow, (xLow + xMid) / 2, (yLow + yMid) / 2);
  ctx.bezierCurveTo(xMid, yMid, xMid, yMid, (xMid + xHigh) / 2, (yMid + yHigh) / 2);
  ctx.bezierCurveTo(xHigh, yHigh, xHigh, yHigh, rect.width, yHigh);
  ctx.stroke();

  // Remplissage sous la courbe
  ctx.lineTo(rect.width, rect.height);
  ctx.lineTo(0, rect.height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.12;
  ctx.fill();
  ctx.globalAlpha = 1.0;

  // Points de contrôle
  const points = [
    { x: xLow, y: yLow },
    { x: xMid, y: yMid },
    { x: xHigh, y: yHigh }
  ];

  points.forEach(p => {
    ctx.fillStyle = color;
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
}

function duplicateTrack(instId) {
  const currentDuplicatesCount = INSTRUMENTS.filter(i => i.isDuplicate).length;

  if (currentDuplicatesCount >= 6) {
    alert('Limite atteinte : Vous ne pouvez pas créer plus de 6 pistes dupliquées.');
    return;
  }

  const sourceIndex = INSTRUMENTS.findIndex(i => i.id === instId);
  if (sourceIndex === -1) return;

  const sourceInst = INSTRUMENTS[sourceIndex];
  const newId = Math.max(...INSTRUMENTS.map(i => i.id)) + 1;

  const newInst = {
    ...sourceInst,
    id: newId,
    name: `${sourceInst.name} (Copie)`,
    key: '',
    isDuplicate: true
  };

  INSTRUMENTS.splice(sourceIndex + 1, 0, newInst);

  if (typeof initInstrumentData === 'function') {
    data[newId] = initInstrumentData(newId);
  } else {
    data[newId] = JSON.parse(JSON.stringify(data[instId]));
  }

  if (data[instId]) {
    data[newId].grid = JSON.parse(JSON.stringify(data[instId].grid));
    data[newId].volume = data[instId].volume;
    data[newId].pan = data[instId].pan;
    data[newId].reverb = data[instId].reverb;
    data[newId].delay = data[instId].delay;
    data[newId].waveX = data[instId].waveX;
    data[newId].waveY = data[instId].waveY;
    data[newId].eqLow = data[instId].eqLow;
    data[newId].eqMid = data[instId].eqMid;
    data[newId].eqHigh = data[instId].eqHigh;
  }

  data[newId].mute = true;

  reindexDuplicateKeys();
  renderMainRows();
}

function removeTrack(instId) {
  const index = INSTRUMENTS.findIndex(i => i.id === instId);
  if (index === -1) return;

  INSTRUMENTS.splice(index, 1);
  delete data[instId];

  if (typeof current !== 'undefined' && current === instId) {
    const modal = document.getElementById('editorModal');
    if (modal && modal.classList.contains('open')) {
      const closeBtn = document.getElementById('closeModalBtn');
      if (closeBtn) closeBtn.click();
    }
  }

  reindexDuplicateKeys();
  renderMainRows();
}

function reindexDuplicateKeys() {
  let dupIdx = 0;
  INSTRUMENTS.forEach(inst => {
    if (inst.isDuplicate) {
      inst.key = (typeof DUPLICATE_KEYS !== 'undefined' && DUPLICATE_KEYS[dupIdx]) ? DUPLICATE_KEYS[dupIdx] : '';
      dupIdx++;
    }
  });
  if (typeof duplicateCount !== 'undefined') {
    duplicateCount = dupIdx;
  }
}

function handleSoloClick(id, isMulti) {
  if (!data[id]) return;

  if (isMulti) {
    data[id].solo = !data[id].solo;
    return;
  }

  const wasOnlySoloed = data[id].solo && INSTRUMENTS.every(i => i.id === id || !data[i.id].solo);
  INSTRUMENTS.forEach(i => { data[i.id].solo = false; });
  if (!wasOnlySoloed) data[id].solo = true;
}

function renderMainRows() {
  const container = document.getElementById('instrumentsList');
  if (!container) return;
  container.innerHTML = '';

  INSTRUMENTS.forEach(inst => {
    const instData = data[inst.id] || { grid: {}, solo: false, mute: false };
    const isSolo = !!instData.solo;
    const isMute = !!instData.mute;
    const isDrawerOpen = !!openDrawers[inst.id];

    const states = Array.from({ length: typeof STEPS_COUNT !== 'undefined' ? STEPS_COUNT : 32 }, (_, step) => {
      if (!instData.grid || typeof NOTES === 'undefined') return 0;
      return Math.max(...NOTES.map(note => (instData.grid[note.id] ? instData.grid[note.id][step] : 0)));
    });

    const wrapper = document.createElement('div');

    const row = document.createElement('div');
    row.className = `instrument-row-container ${isMute ? 'muted' : ''}`;
    const actionBtnHTML = inst.isDuplicate 
      ? `<button class="btn-track btn-remove" title="Supprimer cette piste">-</button>` 
      : `<button class="btn-track btn-duplicate" title="Dupliquer cette piste">+</button>`;

    row.innerHTML = `
      <button class="instrument-row" style="--track: ${inst.color || '#667'}">
        <span class="inst-info">
          <span class="key-badge" title="Touche Mute/Unmute">${inst.key || ''}</span>
          <span class="inst-name-wrapper" title="Cliquer pour changer la sonorité">
            <span class="inst-text-block">
              <span class="instrument-name">${inst.name}</span>
              <span class="instrument-type">${inst.type || inst.voice}</span>
            </span>
            <span class="btn-drawer-toggle">${isDrawerOpen ? '▲' : '▼'}</span>
          </span>
        </span>
        <span class="pattern">
          ${states.map(value => `<i class="${value ? 'active' : ''} ${value === 2 ? 'linked' : ''}"></i>`).join('')}
        </span>
      </button>
      <button class="btn-track btn-mute ${isMute ? 'active' : ''}" title="Mute [${inst.key || ''}]">M</button>
      <button class="btn-track btn-solo ${isSolo ? 'active' : ''}" title="Solo">S</button>
      ${actionBtnHTML}
    `;

    const mainBtn = row.querySelector('.instrument-row');
    const nameWrapper = row.querySelector('.inst-name-wrapper');

    if (nameWrapper) {
      nameWrapper.onclick = (e) => {
        e.stopPropagation();
        openDrawers[inst.id] = !openDrawers[inst.id];
        renderMainRows();
      };
    }

    if (mainBtn) {
      mainBtn.onclick = (e) => {
        if (typeof openEditor === 'function') openEditor(inst.id);
        if (e.target.blur) e.target.blur();
      };
    }

    const muteBtn = row.querySelector('.btn-mute');
    if (muteBtn) {
      muteBtn.onclick = (e) => {
        e.stopPropagation();
        if (data[inst.id]) data[inst.id].mute = !data[inst.id].mute;
        renderMainRows();
        if (e.target.blur) e.target.blur();
      };
    }

    const soloBtn = row.querySelector('.btn-solo');
    if (soloBtn) {
      soloBtn.onclick = (e) => {
        e.stopPropagation();
        if (typeof handleSoloClick === 'function') {
          handleSoloClick(inst.id, e.altKey || (typeof altDown !== 'undefined' && altDown));
        }
        renderMainRows();
        if (e.target.blur) e.target.blur();
      };
    }

    if (inst.isDuplicate) {
      const removeBtn = row.querySelector('.btn-remove');
      if (removeBtn) {
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          removeTrack(inst.id);
          if (e.target.blur) e.target.blur();
        };
      }
    } else {
      const dupBtn = row.querySelector('.btn-duplicate');
      if (dupBtn) {
        dupBtn.onclick = (e) => {
          e.stopPropagation();
          duplicateTrack(inst.id);
          if (e.target.blur) e.target.blur();
        };
      }
    }

    wrapper.appendChild(row);

    const drawer = document.createElement('div');
    drawer.className = `instrument-drawer ${isDrawerOpen ? 'open' : ''}`;

    const voicePresets = PRESETS[inst.voice] || [];
    voicePresets.forEach(preset => {
      const presetBtn = document.createElement('div');
      const isActive = inst.name === preset.name;
      presetBtn.className = `preset-option ${isActive ? 'active' : ''}`;
      presetBtn.innerHTML = `
        <span class="preset-title">${preset.name}</span>
        <span class="preset-desc">${preset.desc}</span>
      `;

      presetBtn.onclick = (e) => {
        e.stopPropagation();
        inst.name = preset.name;
        inst.type = preset.desc;
        data[inst.id].waveX = preset.waveX;
        data[inst.id].waveY = preset.waveY;

        current = inst.id;
        if (typeof playCurrentInstrumentSound === 'function') {
          playCurrentInstrumentSound(false);
        }

        renderMainRows();
      };

      drawer.appendChild(presetBtn);
    });

    wrapper.appendChild(drawer);
    container.appendChild(wrapper);
  });

  if (typeof setupHomeFooterHelpText === 'function') {
    setupHomeFooterHelpText();
  }
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

function updateLabels() {
  const c = data[current];
  $('val-vol').textContent = `${Math.round(c.volume * 100)} %`;
  $('val-pan').textContent = c.pan === 0 ? 'Centre' : c.pan > 0 ? 'Droite' : 'Gauche';
  $('val-reverb').textContent = `${Math.round(c.reverb * 100)} %`;
  $('val-delay').textContent = `${Math.round(c.delay * 100)} %`;

  if ($('val-wave')) {
    let waveName = 'Sine';
    if (c.waveX >= 0.25 && c.waveX < 0.5) waveName = 'Triangle';
    else if (c.waveX >= 0.5 && c.waveX < 0.75) waveName = 'Sawtooth';
    else if (c.waveX >= 0.75) waveName = 'Square / Pulse';

    let character = 'Pur / Doux';
    if (c.waveY > 0.3 && c.waveY <= 0.6) character = 'Chaud / Brillant';
    else if (c.waveY > 0.6 && c.waveY <= 0.85) character = 'Filtre / Texture';
    else if (c.waveY > 0.85) character = 'Rond / Profond';

    $('val-wave').textContent = `${waveName} | ${character}`;
  }

  if ($('val-eq')) {
    const formatDB = (val) => (val > 0 ? `+${val}` : `${val}`) + 'dB';
    $('val-eq').textContent = `G: ${formatDB(c.eqLow || 0)} | M: ${formatDB(c.eqMid || 0)} | A: ${formatDB(c.eqHigh || 0)}`;
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
  initEQPad();
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
  updateDelayFromBpm();
  $('bpmLabel').textContent = `${bpm} BPM`;
  event.target.blur();
};

$('closeModalBtn').onclick = (e) => {
  $('editorModal').classList.remove('open');
  $('editorModal').setAttribute('aria-hidden', 'true');
  renderMainRows();
  if (e.target.blur) e.target.blur();
};

let eqWasDraggingOutside = false;

$('editorModal').onclick = event => {
  const modal = $('editorModal');

  // Si on vient de relâcher la souris après avoir
  // déplacé le point EQ hors de la fenêtre :
  if (eqWasDraggingOutside) {
    eqWasDraggingOutside = false;
    return;
  }

  // Clic volontaire sur le fond du modal = fermeture
  if (event.target === modal) {
    $('closeModalBtn').click();
  }
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
      drawEQPad();
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
    for (let x = 0; x <= box.width + 10; x += 9) {
      const targetX = Math.min(x, box.width);
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
