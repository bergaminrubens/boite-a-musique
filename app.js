const PRESETS = {

  kick: [
  {
    name: 'Hard Punch Kick',
    desc: 'Kick brutal et claquant, attaque très courte, gros impact et sub dense',
    type: 'punch',
    startRatio: 5.2,
    endRatio: 0.88,
    pitchDrop: 0.055,
    bodyDur: 0.24,
    clickRatio: 34,
    clickDur: 0.009,
    clickLevel: 0.82,
    bodyLevel: 1.18,
    drive: 0.72,
    driveMix: 0.9,
    decay: 0.22,
    attack: 0.00035,
    level: 0.9,
    waveX: 0.34,
    waveY: 0.94
  },

  {
    name: 'Sub Destroyer 808',
    desc: 'Kick 808 profond avec chute de pitch massive et longue queue sub saturée',
    type: '808',
    startRatio: 4.4,
    endRatio: 0.5,
    pitchDrop: 0.14,
    bodyDur: 0.72,
    clickRatio: 15,
    clickDur: 0.007,
    clickLevel: 0.18,
    bodyLevel: 1.08,
    drive: 0.42,
    driveMix: 0.62,
    decay: 0.68,
    attack: 0.001,
    level: 0.94,
    waveX: 0.08,
    waveY: 0.98
  },

  {
    name: 'Tight Techno Kick',
    desc: 'Kick techno court et violent avec attaque sèche, click médium et corps très compact',
    type: 'techno',
    startRatio: 6.0,
    endRatio: 0.82,
    pitchDrop: 0.032,
    bodyDur: 0.16,
    clickRatio: 42,
    clickDur: 0.0045,
    clickLevel: 0.9,
    bodyLevel: 1.0,
    drive: 0.86,
    driveMix: 0.95,
    decay: 0.14,
    attack: 0.0002,
    level: 0.88,
    waveX: 0.84,
    waveY: 0.78
  },

  {
    name: 'Fat Moog Knock',
    desc: 'Kick analogique rond et épais avec knock grave et saturation douce',
    type: 'moog',
    startRatio: 4.8,
    endRatio: 0.92,
    pitchDrop: 0.085,
    bodyDur: 0.38,
    clickRatio: 13,
    clickDur: 0.016,
    clickLevel: 0.3,
    bodyLevel: 1.12,
    drive: 0.36,
    driveMix: 0.52,
    decay: 0.36,
    attack: 0.0012,
    level: 0.88,
    waveX: 0.56,
    waveY: 0.7
  }
],

  snare: [
  {
    name: 'Live Acoustic Snare',
    desc: 'Caisse claire acoustique vivante avec attaque de baguette, corps tendu et résonance de peau',
    type: 'acoustic',
    bodyRatio: 1,
    bodyDropRatio: 0.72,
    bodyDropTime: 0.032,
    bodyDur: 0.14,
    bodyLevel: 0.94,
    noiseDur: 0.19,
    noiseLevel: 0.86,
    noiseHpRatio: 18,
    noiseBpRatio: 48,
    noiseQ: 0.8,
    rimRatio: 8.5,
    rimDur: 0.006,
    rimLevel: 0.48,
    snapRatio: 22,
    snapDur: 0.004,
    snapLevel: 0.38,
    attack: 0.0004,
    decay: 0.14,
    drive: 0.08,
    level: 0.72,
    waveX: 0.38,
    waveY: 0.54
  },

  {
    name: 'TR-909 Dry Snare',
    desc: 'Snare électronique sèche et agressive avec claquement court, corps médium et bruit métallique',
    type: '909',
    bodyRatio: 1.12,
    bodyDropRatio: 0.48,
    bodyDropTime: 0.018,
    bodyDur: 0.105,
    bodyLevel: 0.78,
    noiseDur: 0.115,
    noiseLevel: 0.96,
    noiseHpRatio: 26,
    noiseBpRatio: 72,
    noiseQ: 1.15,
    rimRatio: 13,
    rimDur: 0.004,
    rimLevel: 0.56,
    snapRatio: 31,
    snapDur: 0.003,
    snapLevel: 0.52,
    attack: 0.00015,
    decay: 0.095,
    drive: 0.28,
    level: 0.68,
    waveX: 0.76,
    waveY: 0.68
  },

  {
    name: 'Crushed Analog Snare',
    desc: 'Snare sale et compacte avec saturation, bruit granuleux et attaque très présente',
    type: 'crushed',
    bodyRatio: 0.94,
    bodyDropRatio: 0.62,
    bodyDropTime: 0.026,
    bodyDur: 0.18,
    bodyLevel: 0.86,
    noiseDur: 0.22,
    noiseLevel: 1.02,
    noiseHpRatio: 14,
    noiseBpRatio: 58,
    noiseQ: 0.55,
    rimRatio: 6.5,
    rimDur: 0.008,
    rimLevel: 0.4,
    snapRatio: 18,
    snapDur: 0.005,
    snapLevel: 0.44,
    attack: 0.00025,
    decay: 0.17,
    drive: 0.65,
    level: 0.66,
    waveX: 0.64,
    waveY: 0.82
  },

  {
    name: 'Soft Vintage Snare',
    desc: 'Snare vintage mate et chaleureuse avec corps rond, bruit doux et attaque feutrée',
    type: 'vintage',
    bodyRatio: 0.9,
    bodyDropRatio: 0.68,
    bodyDropTime: 0.042,
    bodyDur: 0.21,
    bodyLevel: 1.0,
    noiseDur: 0.17,
    noiseLevel: 0.58,
    noiseHpRatio: 11,
    noiseBpRatio: 34,
    noiseQ: 0.65,
    rimRatio: 5.2,
    rimDur: 0.009,
    rimLevel: 0.2,
    snapRatio: 15,
    snapDur: 0.006,
    snapLevel: 0.15,
    attack: 0.0012,
    decay: 0.2,
    drive: 0.12,
    level: 0.76,
    waveX: 0.16,
    waveY: 0.32
  }
],

  hat: [
    {
      name: 'Live Choked Hat',
      desc: 'Charley acoustique frappé puis immédiatement étouffé par la main',
      dur: 0.045,
      hpFreq: 5200,
      metalFreq: 8200,
      metalQ: 0.85,
      bodyFreq: 3600,
      noiseLevel: 1.15,
      bodyLevel: 0.32,
      bodyAttack: 0.0012,
      metalLevel: 0.28,
      metalAttack: 0.0004,
      choke: 0.28,
      attack: 0.0007,
      click: true,
      clickFreq: 11200,
      clickLevel: 0.32,
      clickDur: 0.004,
      level: 0.54,
      waveX: 0.9,
      waveY: 0.86
    },
    {
      name: 'TR-909 Closed Hat',
      desc: 'Charley fermé électronique métallique, sec et agressif inspiré de la TR-909',
      dur: 0.035,
      hpFreq: 6100,
      metalFreq: 9300,
      metalQ: 1.05,
      bodyFreq: 4300,
      noiseLevel: 1.0,
      bodyLevel: 0.18,
      bodyAttack: 0.0008,
      metalLevel: 0.46,
      metalAttack: 0.00025,
      choke: 0.42,
      attack: 0.0004,
      metalRatios: [1, 1.13, 1.29, 1.51, 1.73],
      metalBase: 6900,
      metalWave: 'square',
      detune: 7,
      click: true,
      clickFreq: 10800,
      clickLevel: 0.2,
      clickDur: 0.003,
      level: 0.52,
      waveX: 0.86,
      waveY: 0.82
    },
    {
      name: 'TR-909 Open Hat',
      desc: 'Charley ouvert métallique et brillant avec une longue décroissance',
      dur: 0.34,
      hpFreq: 5400,
      metalFreq: 7800,
      metalQ: 0.72,
      bodyFreq: 3300,
      noiseLevel: 1.0,
      bodyLevel: 0.26,
      bodyAttack: 0.001,
      metalLevel: 0.38,
      metalAttack: 0.0004,
      choke: 0.96,
      attack: 0.0005,
      metalRatios: [1, 1.17, 1.31, 1.49, 1.67],
      metalBase: 6200,
      metalWave: 'square',
      detune: 9,
      click: true,
      clickFreq: 10400,
      clickLevel: 0.18,
      clickDur: 0.004,
      level: 0.48,
      waveX: 0.78,
      waveY: 0.94
    },
    {
      name: 'Loose Jazz Hat',
      desc: 'Charley acoustique souple et irrégulier, plus sombre et organique',
      dur: 0.065,
      hpFreq: 4300,
      metalFreq: 6800,
      metalQ: 0.58,
      bodyFreq: 2800,
      noiseLevel: 0.82,
      bodyLevel: 0.42,
      bodyAttack: 0.002,
      metalLevel: 0.19,
      metalAttack: 0.001,
      choke: 0.62,
      attack: 0.0015,
      click: true,
      clickFreq: 8600,
      clickLevel: 0.12,
      clickDur: 0.006,
      level: 0.43,
      waveX: 0.35,
      waveY: 0.48
    }
  ],

  sub: [
    {
      name: 'Moog Acid Bass',
      desc: 'Basse analogique agressive avec résonance prononcée et filtre qui mord',
      wave: 'sawtooth',
      cutoff: 1750,
      attack: 0.006,
      resonance: 8.5,
      level: 0.52,
      harmonicLevel: 0.9,
      subLevel: 0.72,
      drive: 0.34,
      filterEnv: 0.7,
      filterAttack: 0.008,
      filterDecay: 0.22,
      decay: 0.5,
      waveX: 0.62,
      waveY: 0.58
    },
    {
      name: 'Deep Tape Sub',
      desc: 'Sub très rond, sombre et presque sinusoïdal avec énorme fondation grave',
      wave: 'sine',
      cutoff: 520,
      attack: 0.022,
      resonance: 1.5,
      level: 0.68,
      harmonicLevel: 0.18,
      subLevel: 1.0,
      drive: 0.08,
      filterEnv: 0.15,
      filterAttack: 0.02,
      filterDecay: 0.38,
      decay: 0.72,
      waveX: 0.05,
      waveY: 0.88
    },
    {
      name: 'Rubber Square Bass',
      desc: 'Basse carrée élastique, sèche et bondissante avec médiums très présents',
      wave: 'square',
      cutoff: 2100,
      attack: 0.002,
      resonance: 4.2,
      level: 0.46,
      harmonicLevel: 0.82,
      subLevel: 0.55,
      drive: 0.22,
      filterEnv: 0.55,
      filterAttack: 0.002,
      filterDecay: 0.16,
      decay: 0.3,
      waveX: 0.74,
      waveY: 0.34
    },
    {
      name: 'Juno Rubber Bass',
      desc: 'Basse analogique douce mais épaisse avec mouvement de filtre et grave velouté',
      wave: 'triangle',
      cutoff: 1250,
      attack: 0.012,
      resonance: 5.8,
      level: 0.55,
      harmonicLevel: 0.65,
      subLevel: 0.88,
      drive: 0.16,
      filterEnv: 0.42,
      filterAttack: 0.012,
      filterDecay: 0.32,
      decay: 0.58,
      waveX: 0.38,
      waveY: 0.62
    }
  ],

  kalimba: [
  {
    name: 'Tight Wood Block',
    desc: 'Bloc de bois sec, claquant et très court, avec un transitoire net',
    type: 'wood',
    harmonicRatio: 2.62,
    secondaryRatio: 4.17,
    decay: 0.075,
    attack: 0.0003,
    noiseAmt: 0.16,
    noiseDur: 0.012,
    bodyLevel: 0.72,
    secondaryLevel: 0.18,
    level: 0.62,
    waveX: 0.62,
    waveY: 0.16
  },

  {
    name: 'Natural Kalimba',
    desc: 'Kalimba organique avec attaque de lamelle, résonance douce et harmonique brillante',
    type: 'kalimba',
    harmonicRatio: 2.01,
    secondaryRatio: 3.97,
    decay: 0.42,
    attack: 0.0008,
    noiseAmt: 0.055,
    noiseDur: 0.018,
    bodyLevel: 0.66,
    secondaryLevel: 0.34,
    level: 0.64,
    waveX: 0.18,
    waveY: 0.48
  },

  {
    name: 'Metal Tine Perc',
    desc: 'Lamelle métallique frappée, brillante, tendue et résonante',
    type: 'metal',
    harmonicRatio: 3.17,
    secondaryRatio: 6.43,
    decay: 0.58,
    attack: 0.0002,
    noiseAmt: 0.11,
    noiseDur: 0.009,
    bodyLevel: 0.58,
    secondaryLevel: 0.42,
    level: 0.53,
    waveX: 0.76,
    waveY: 0.78
  },

  {
    name: 'Deep Hollow Perc',
    desc: 'Percussion boisée grave et creuse avec une résonance sombre',
    type: 'hollow',
    harmonicRatio: 1.47,
    secondaryRatio: 2.93,
    decay: 0.72,
    attack: 0.0012,
    noiseAmt: 0.025,
    noiseDur: 0.022,
    bodyLevel: 0.78,
    secondaryLevel: 0.22,
    level: 0.68,
    waveX: 0.28,
    waveY: 0.68
  }
],

  pluck: [
  {
    name: 'Nylon Finger Pluck',
    desc: 'Corde nylon douce, ronde, mate et naturelle avec une attaque discrète',
    type: 'nylon',
    fmRatio: 1.01,
    fmMod: 0.16,
    decay: 0.42,
    attack: 0.0008,
    bodyLevel: 0.78,
    harmonicLevel: 0.16,
    noiseAmt: 0.035,
    noiseDur: 0.012,
    level: 0.62,
    waveX: 0.08,
    waveY: 0.18
  },

  {
    name: 'Jangle Electric',
    desc: 'Corde électrique brillante avec attaque métallique et résonance courte',
    type: 'electric',
    fmRatio: 2.03,
    fmMod: 1.35,
    decay: 0.34,
    attack: 0.00025,
    bodyLevel: 0.66,
    harmonicLevel: 0.32,
    noiseAmt: 0.075,
    noiseDur: 0.008,
    level: 0.57,
    waveX: 0.58,
    waveY: 0.62
  },

  {
    name: 'Glass FM Pluck',
    desc: 'Pluck cristallin très brillant avec attaque dure et partiels métalliques',
    type: 'glass',
    fmRatio: 5.17,
    fmMod: 4.8,
    decay: 0.52,
    attack: 0.0001,
    bodyLevel: 0.48,
    harmonicLevel: 0.46,
    noiseAmt: 0.09,
    noiseDur: 0.006,
    level: 0.49,
    waveX: 0.82,
    waveY: 0.9
  },

  {
    name: 'Muted Sitar Pluck',
    desc: 'Corde pincée sèche et nasale avec résonance harmonique irrégulière',
    type: 'sitar',
    fmRatio: 3.47,
    fmMod: 2.7,
    decay: 0.27,
    attack: 0.00015,
    bodyLevel: 0.7,
    harmonicLevel: 0.3,
    noiseAmt: 0.13,
    noiseDur: 0.009,
    level: 0.54,
    waveX: 0.7,
    waveY: 0.48
  }
],

  rhodes: [
  {
    name: 'Vintage Suitcase',
    desc: 'Rhodes chaud et velouté, attaque ronde, tine discrète et longue résonance',
    type: 'suitcase',
    tineRatio: 2.01,
    tineVol: 0.22,
    tineAttack: 0.002,
    tineDecay: 0.16,
    bodyLevel: 0.82,
    release: 1.25,
    cutoff: 4200,
    resonance: 1.2,
    level: 0.58,
    waveX: 0.18,
    waveY: 0.34
  },

  {
    name: 'Hard Tine Rhodes',
    desc: 'Rhodes claquant avec tine métallique très présente et attaque incisive',
    type: 'hard',
    tineRatio: 5.03,
    tineVol: 0.72,
    tineAttack: 0.00015,
    tineDecay: 0.07,
    bodyLevel: 0.58,
    release: 0.7,
    cutoff: 7600,
    resonance: 2.8,
    level: 0.52,
    waveX: 0.74,
    waveY: 0.72
  },

  {
    name: 'Dream Chorus Rhodes',
    desc: 'Rhodes large et flottant avec deux couches légèrement désaccordées',
    type: 'chorus',
    tineRatio: 3.01,
    tineVol: 0.38,
    tineAttack: 0.001,
    tineDecay: 0.11,
    bodyLevel: 0.68,
    release: 1.45,
    cutoff: 5200,
    resonance: 1.5,
    detune: 7,
    level: 0.48,
    waveX: 0.42,
    waveY: 0.58
  },

  {
    name: 'Dirty Stage Rhodes',
    desc: 'Rhodes de scène légèrement saturé, médium agressif et tine granuleuse',
    type: 'dirty',
    tineRatio: 4.27,
    tineVol: 0.64,
    tineAttack: 0.0003,
    tineDecay: 0.055,
    bodyLevel: 0.62,
    release: 0.82,
    cutoff: 6100,
    resonance: 4.2,
    drive: 0.22,
    level: 0.46,
    waveX: 0.62,
    waveY: 0.76
  }
],

  brass: [
  {
    name: 'Neon Brass Section',
    desc: 'Section de cuivres synthétiques façon années 80, brillante et compacte',
    type: 'section',
    detune: 11,
    secondDetune: -8,
    attack: 0.018,
    release: 0.32,
    cutoffStart: 850,
    cutoffEnd: 6200,
    resonance: 2.4,
    bodyLevel: 0.72,
    secondLevel: 0.48,
    breathLevel: 0.055,
    breathDur: 0.08,
    level: 0.54,
    waveX: 0.62,
    waveY: 0.62
  },

  {
    name: 'Bright Trumpet',
    desc: 'Trompette synthétique tendue, nasale et agressive avec attaque franche',
    type: 'trumpet',
    detune: 6,
    secondDetune: 13,
    attack: 0.006,
    release: 0.24,
    cutoffStart: 1800,
    cutoffEnd: 8200,
    resonance: 3.8,
    bodyLevel: 0.68,
    secondLevel: 0.36,
    breathLevel: 0.025,
    breathDur: 0.035,
    level: 0.51,
    waveX: 0.82,
    waveY: 0.76
  },

  {
    name: 'Warm Muted Horn',
    desc: 'Cuivre feutré et chaud, plus sombre, avec attaque lente et médiums ronds',
    type: 'muted',
    detune: 4,
    secondDetune: -3,
    attack: 0.075,
    release: 0.46,
    cutoffStart: 500,
    cutoffEnd: 2700,
    resonance: 1.8,
    bodyLevel: 0.78,
    secondLevel: 0.22,
    breathLevel: 0.08,
    breathDur: 0.12,
    level: 0.58,
    waveX: 0.28,
    waveY: 0.32
  },

  {
    name: 'Massive Synth Brass',
    desc: 'Brass synth épais et puissant avec deux couches désaccordées et ouverture de filtre',
    type: 'massive',
    detune: 17,
    secondDetune: -14,
    attack: 0.028,
    release: 0.58,
    cutoffStart: 700,
    cutoffEnd: 7600,
    resonance: 4.6,
    bodyLevel: 0.76,
    secondLevel: 0.58,
    breathLevel: 0.035,
    breathDur: 0.06,
    level: 0.50,
    waveX: 0.54,
    waveY: 0.84
  }
],

  bell: [
  {
    name: 'FM Crystal Bell',
    desc: 'Cloche cristalline très brillante, attaque nette et résonance longue',
    type: 'crystal',
    fmRatio: 2.71,
    modDepth: 5.8,
    decayMult: 2.8,
    attack: 0.0008,
    harmonicLevel: 0.42,
    highLevel: 0.24,
    highRatio: 5.43,
    highDecay: 0.55,
    level: 0.44,
    waveX: 0.16,
    waveY: 0.88
  },

  {
    name: 'Warm Bronze Bell',
    desc: 'Cloche bronze sombre et ronde avec une longue queue chaleureuse',
    type: 'bronze',
    fmRatio: 1.47,
    modDepth: 1.65,
    decayMult: 4.2,
    attack: 0.0015,
    harmonicLevel: 0.58,
    highLevel: 0.10,
    highRatio: 3.91,
    highDecay: 1.8,
    level: 0.48,
    waveX: 0.05,
    waveY: 0.42
  },

  {
    name: 'Music Box Bell',
    desc: 'Petite cloche de boîte à musique sèche, fine et délicate',
    type: 'musicbox',
    fmRatio: 3.98,
    modDepth: 2.2,
    decayMult: 1.15,
    attack: 0.0003,
    harmonicLevel: 0.48,
    highLevel: 0.32,
    highRatio: 8.02,
    highDecay: 0.35,
    level: 0.43,
    waveX: 0.42,
    waveY: 0.18
  },

  {
    name: 'Dark Tubular Bell',
    desc: 'Grande cloche tubulaire grave, profonde et résonnante',
    type: 'tubular',
    fmRatio: 1.98,
    modDepth: 1.15,
    decayMult: 5.5,
    attack: 0.002,
    harmonicLevel: 0.72,
    highLevel: 0.07,
    highRatio: 2.98,
    highDecay: 2.6,
    level: 0.40,
    waveX: 0.30,
    waveY: 0.30
  }
],

  flute: [
  {
    name: 'Warm Bamboo Flute',
    desc: 'Flûte bambou organique, chaude et boisée avec souffle irrégulier',
    type: 'bamboo',
    vibratoFreq: 2.35,
    vibratoDepth: 0.012,
    noiseAmt: 0.13,
    noiseFreqRatio: 2.8,
    noiseQ: 1.2,
    attack: 0.055,
    release: 0.42,
    bodyLevel: 0.78,
    breathLevel: 0.22,
    breathAttack: 0.018,
    breathDecay: 0.16,
    cutoff: 3600,
    resonance: 0.8,
    level: 0.56,
    waveX: 0.08,
    waveY: 0.34
  },

  {
    name: 'Silver Concert Flute',
    desc: 'Flûte traversière claire et précise, souffle fin et aigu avec vibrato naturel',
    type: 'concert',
    vibratoFreq: 5.1,
    vibratoDepth: 0.018,
    noiseAmt: 0.19,
    noiseFreqRatio: 4.8,
    noiseQ: 2.4,
    attack: 0.018,
    release: 0.3,
    bodyLevel: 0.72,
    breathLevel: 0.3,
    breathAttack: 0.012,
    breathDecay: 0.11,
    cutoff: 8200,
    resonance: 1.5,
    level: 0.50,
    waveX: 0.32,
    waveY: 0.72
  },

  {
    name: 'Dream Air Flute',
    desc: 'Flûte flottante et douce avec souffle large, vibrato lent et texture presque synthétique',
    type: 'air',
    vibratoFreq: 3.15,
    vibratoDepth: 0.026,
    noiseAmt: 0.34,
    noiseFreqRatio: 3.5,
    noiseQ: 0.7,
    attack: 0.09,
    release: 0.8,
    bodyLevel: 0.58,
    breathLevel: 0.42,
    breathAttack: 0.035,
    breathDecay: 0.3,
    cutoff: 6200,
    resonance: 0.5,
    level: 0.42,
    waveX: 0.22,
    waveY: 0.86
  },

  {
    name: 'Raw Wooden Flute',
    desc: 'Flûte boisée brute et nasale, souffle granuleux et attaque expressive',
    type: 'wood',
    vibratoFreq: 4.0,
    vibratoDepth: 0.009,
    noiseAmt: 0.27,
    noiseFreqRatio: 2.2,
    noiseQ: 1.8,
    attack: 0.028,
    release: 0.52,
    bodyLevel: 0.68,
    breathLevel: 0.34,
    breathAttack: 0.009,
    breathDecay: 0.13,
    cutoff: 4400,
    resonance: 2.2,
    level: 0.48,
    waveX: 0.42,
    waveY: 0.55
  }
],

  pad: [
  {
    name: 'Juno Velvet Pad',
    desc: 'Nappe analogique dense et chaude, large, douce et légèrement chorussée',
    type: 'juno',
    wave: 'sawtooth',
    detune: 7,
    detune2: 13,
    cutoff: 2200,
    resonance: 2.8,
    attack: 0.42,
    release: 1.7,
    filterAttack: 0.55,
    filterRelease: 1.2,
    level: 0.34,
    waveX: 0.58,
    waveY: 0.46
  },

  {
    name: 'Eno Tape Cloud',
    desc: 'Nappe flottante et organique avec une attaque lente, une couleur de bande et beaucoup d’air',
    type: 'tape',
    wave: 'triangle',
    detune: 4,
    detune2: 9,
    cutoff: 3400,
    resonance: 1.2,
    attack: 1.15,
    release: 2.8,
    filterAttack: 1.4,
    filterRelease: 2.2,
    noiseAmt: 0.035,
    level: 0.28,
    waveX: 0.34,
    waveY: 0.68
  },

  {
    name: 'Daft Poly Pad',
    desc: 'Pad synthétique polyphonique brillant, épais et légèrement agressif',
    type: 'poly',
    wave: 'sawtooth',
    detune: 11,
    detune2: 19,
    cutoff: 4100,
    resonance: 4.5,
    attack: 0.18,
    release: 1.15,
    filterAttack: 0.22,
    filterRelease: 0.75,
    level: 0.31,
    waveX: 0.72,
    waveY: 0.72
  },

  {
    name: 'Glass Horizon',
    desc: 'Nappe cristalline froide et scintillante, presque numérique, avec des harmoniques métalliques',
    type: 'glass',
    wave: 'sine',
    detune: 23,
    detune2: 41,
    cutoff: 9200,
    resonance: 3.6,
    attack: 0.22,
    release: 2.4,
    filterAttack: 0.16,
    filterRelease: 1.8,
    noiseAmt: 0.006,
    level: 0.22,
    waveX: 0.12,
    waveY: 0.98
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

const NOTES = Array.from({ length: 84 }, (_, id) => {
  const noteIndex = id % 12;
  const octave = Math.floor(id / 12) + 1;

  return {
    id,
    name: `${LABELS[noteIndex]}${octave}`,
    black: LABELS[noteIndex].includes('#'),
    freq: 32.7032 * (2 ** (id / 12))
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
  [0, KICK_DEFAULT_INDEX, [
    , 16, 32, 48
  ]],

  [1, DEFAULT_NOTE_INDEX + 3, [
    16, 48
  ]],

  [2, DEFAULT_NOTE_INDEX + 9, [
    4, 12, 20, 28, 36, 44, 52, 60
  ]],

  [3, BASS_DEFAULT_INDEX, [
    0, 10, 16, 27, 32, 42, 48, 59
  ]],

  [3, BASS_DEFAULT_INDEX + 3, [
    14, 30, 46
  ]],

  [3, BASS_DEFAULT_INDEX + 7, [
    23, 55
  ]],

  [4, DEFAULT_NOTE_INDEX, [
    0
  ]],

  [4, DEFAULT_NOTE_INDEX + 3, [
    0
  ]],

  [4, DEFAULT_NOTE_INDEX + 7, [
    0
  ]],

  [5, DEFAULT_NOTE_INDEX + 10, [
    7, 23, 39, 55
  ]],

  [7, DEFAULT_NOTE_INDEX + 8, [
    12, 28, 44, 60
  ]],

  [8, DEFAULT_NOTE_INDEX + 7, [
    3, 19, 35, 51
  ]],

  [9, DEFAULT_NOTE_INDEX + 12, [
    14, 46
  ]],

  [10, DEFAULT_NOTE_INDEX, [
    0
  ]],

  [10, DEFAULT_NOTE_INDEX + 3, [
    0
  ]],

  [10, DEFAULT_NOTE_INDEX + 7, [
    0
  ]],

  [10, DEFAULT_NOTE_INDEX + 8, [
    16
  ]],

  [10, DEFAULT_NOTE_INDEX + 11, [
    16
  ]],

  [10, DEFAULT_NOTE_INDEX + 15, [
    16
  ]],

  [10, DEFAULT_NOTE_INDEX + 3, [
    32
  ]],

  [10, DEFAULT_NOTE_INDEX + 7, [
    32
  ]],

  [10, DEFAULT_NOTE_INDEX + 10, [
    32
  ]],

  [10, DEFAULT_NOTE_INDEX + 7, [
    48
  ]],

  [10, DEFAULT_NOTE_INDEX + 10, [
    48
  ]],

  [10, DEFAULT_NOTE_INDEX + 14, [
    48
  ]]
]

.forEach(([instIndex, noteIndex, steps]) => {
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
    kick:    0.58,
    snare:   0.72,
    hat:     0.78,
    sub:     0.68,
    kalimba: 0.74,
    pluck:   0.76,
    rhodes:  0.82,
    brass:   0.78,
    bell:    0.82,
    flute:   0.86,
    pad:     0.92
  };

  const base = baseLevels[inst.voice] ?? 0.75;
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
  const type = preset.type || 'punch';

  const body = audio.createOscillator();
  const bodyGain = audio.createGain();
  const drive = audio.createWaveShaper();

  const startFreq = Math.max(25, freq * (preset.startRatio ?? 5));
  const endFreq = Math.max(20, freq * (preset.endRatio ?? 0.8));

  const bodyDur = preset.bodyDur ?? 0.25;
  const pitchDrop = preset.pitchDrop ?? 0.06;

  const bodyLevel = preset.bodyLevel ?? 1;
  const driveAmount = preset.drive ?? 0.3;

  const curve = new Float32Array(44100);

  for (let i = 0; i < curve.length; i++) {
    const x = (i * 2) / curve.length - 1;
    curve[i] =
      ((1 + driveAmount * 14) * x) /
      (1 + driveAmount * 14 * Math.abs(x));
  }

  drive.curve = curve;
  drive.oversample = '4x';

  if (type === '808') {
    body.type = 'sine';

    body.frequency.setValueAtTime(startFreq, time);

    body.frequency.exponentialRampToValueAtTime(
      endFreq,
      time + pitchDrop
    );

    body.frequency.exponentialRampToValueAtTime(
      Math.max(20, endFreq * 0.96),
      time + bodyDur
    );

    envelope(
      bodyGain,
      finalLevel * bodyLevel,
      time,
      preset.attack ?? 0.001,
      preset.decay ?? bodyDur
    );

    body.connect(drive);
    drive.connect(bodyGain);
    bodyGain.connect(out);

    const click = audio.createOscillator();
    const clickGain = audio.createGain();

    const clickFreq = Math.min(
      audio.sampleRate * 0.45,
      Math.max(300, freq * (preset.clickRatio ?? 15))
    );

    click.type = 'triangle';
    click.frequency.setValueAtTime(clickFreq, time);
    click.frequency.exponentialRampToValueAtTime(
      Math.max(80, clickFreq * 0.3),
      time + (preset.clickDur ?? 0.007)
    );

    envelope(
      clickGain,
      finalLevel * (preset.clickLevel ?? 0.15),
      time,
      0.00015,
      preset.clickDur ?? 0.007
    );

    click.connect(clickGain);
    clickGain.connect(out);

    click.start(time);
    click.stop(time + (preset.clickDur ?? 0.007) + 0.005);

    body.start(time);
    body.stop(time + bodyDur + 0.06);

    return;
  }

  if (type === 'techno') {
    body.type = 'square';

    body.frequency.setValueAtTime(startFreq, time);

    body.frequency.exponentialRampToValueAtTime(
      endFreq,
      time + pitchDrop
    );

    envelope(
      bodyGain,
      finalLevel * bodyLevel,
      time,
      preset.attack ?? 0.0002,
      preset.decay ?? bodyDur
    );

    body.connect(drive);
    drive.connect(bodyGain);
    bodyGain.connect(out);

    const click = audio.createOscillator();
    const clickGain = audio.createGain();
    const clickFilter = audio.createBiquadFilter();

    const clickFreq = Math.min(
      audio.sampleRate * 0.45,
      Math.max(500, freq * (preset.clickRatio ?? 42))
    );

    click.type = 'triangle';
    click.frequency.setValueAtTime(clickFreq, time);
    click.frequency.exponentialRampToValueAtTime(
      Math.max(300, clickFreq * 0.22),
      time + (preset.clickDur ?? 0.0045)
    );

    clickFilter.type = 'highpass';
    clickFilter.frequency.setValueAtTime(
      Math.max(700, freq * 8),
      time
    );

    envelope(
      clickGain,
      finalLevel * (preset.clickLevel ?? 0.85),
      time,
      0.0001,
      preset.clickDur ?? 0.0045
    );

    click.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(out);

    click.start(time);
    click.stop(time + (preset.clickDur ?? 0.0045) + 0.004);

    body.start(time);
    body.stop(time + bodyDur + 0.025);

    return;
  }

  if (type === 'moog') {
    body.type = 'triangle';

    body.frequency.setValueAtTime(startFreq, time);

    body.frequency.exponentialRampToValueAtTime(
      endFreq,
      time + pitchDrop
    );

    body.frequency.exponentialRampToValueAtTime(
      Math.max(25, endFreq * 0.98),
      time + bodyDur
    );

    const lowpass = audio.createBiquadFilter();

    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(
      Math.min(5000, freq * 14),
      time
    );

    lowpass.frequency.exponentialRampToValueAtTime(
      Math.max(180, freq * 2.2),
      time + Math.min(0.14, bodyDur)
    );

    lowpass.Q.setValueAtTime(2.4, time);

    envelope(
      bodyGain,
      finalLevel * bodyLevel,
      time,
      preset.attack ?? 0.0012,
      preset.decay ?? bodyDur
    );

    body.connect(lowpass);
    lowpass.connect(drive);
    drive.connect(bodyGain);
    bodyGain.connect(out);

    const knock = audio.createOscillator();
    const knockGain = audio.createGain();

    const knockFreq = Math.max(
      120,
      Math.min(5000, freq * (preset.clickRatio ?? 13))
    );

    knock.type = 'sine';

    knock.frequency.setValueAtTime(
      knockFreq,
      time
    );

    knock.frequency.exponentialRampToValueAtTime(
      Math.max(70, freq * 2),
      time + 0.035
    );

    envelope(
      knockGain,
      finalLevel * (preset.clickLevel ?? 0.28),
      time,
      0.0003,
      preset.clickDur ?? 0.016
    );

    knock.connect(knockGain);
    knockGain.connect(out);

    knock.start(time);
    knock.stop(time + (preset.clickDur ?? 0.016) + 0.008);

    body.start(time);
    body.stop(time + bodyDur + 0.06);

    return;
  }

  body.type = waveType;

  body.frequency.setValueAtTime(startFreq, time);

  body.frequency.exponentialRampToValueAtTime(
    endFreq,
    time + pitchDrop
  );

  envelope(
    bodyGain,
    finalLevel * bodyLevel,
    time,
    preset.attack ?? 0.0005,
    preset.decay ?? bodyDur
  );

  body.connect(drive);
  drive.connect(bodyGain);
  bodyGain.connect(out);

  const click = audio.createOscillator();
  const clickGain = audio.createGain();
  const clickFilter = audio.createBiquadFilter();

  const clickFreq = Math.min(
    audio.sampleRate * 0.45,
    Math.max(300, freq * (preset.clickRatio ?? 34))
  );

  click.type = 'triangle';

  click.frequency.setValueAtTime(
    clickFreq,
    time
  );

  click.frequency.exponentialRampToValueAtTime(
    Math.max(120, clickFreq * 0.25),
    time + (preset.clickDur ?? 0.009)
  );

  clickFilter.type = 'bandpass';
  clickFilter.frequency.setValueAtTime(
    clickFreq,
    time
  );
  clickFilter.Q.setValueAtTime(2.8, time);

  envelope(
    clickGain,
    finalLevel * (preset.clickLevel ?? 0.75),
    time,
    0.0001,
    preset.clickDur ?? 0.009
  );

  click.connect(clickFilter);
  clickFilter.connect(clickGain);
  clickGain.connect(out);

  click.start(time);
  click.stop(time + (preset.clickDur ?? 0.009) + 0.005);

  body.start(time);
  body.stop(time + bodyDur + 0.04);

  return;
}

  // 2. SNARE (Pitch dépendant de la note)
  if (inst.voice === 'snare') {
  const type = preset.type || 'acoustic';

  const body = audio.createOscillator();
  const bodyGain = audio.createGain();
  const bodyFilter = audio.createBiquadFilter();

  const bodyRatio = preset.bodyRatio ?? 1;
  const bodyDropRatio = preset.bodyDropRatio ?? 0.65;
  const bodyDropTime = preset.bodyDropTime ?? 0.03;
  const bodyDur = preset.bodyDur ?? 0.14;

  const bodyFreq = Math.max(
    70,
    freq * bodyRatio
  );

  const bodyEndFreq = Math.max(
    45,
    freq * bodyDropRatio
  );

  body.type =
    type === '909'
      ? 'triangle'
      : type === 'crushed'
        ? 'square'
        : type === 'vintage'
          ? 'sine'
          : 'triangle';

  body.frequency.setValueAtTime(
    bodyFreq,
    time
  );

  body.frequency.exponentialRampToValueAtTime(
    bodyEndFreq,
    time + bodyDropTime
  );

  bodyFilter.type = 'bandpass';

  bodyFilter.frequency.setValueAtTime(
    Math.max(120, freq * 2.2),
    time
  );

  bodyFilter.Q.setValueAtTime(
    type === 'vintage' ? 1.4 : 2.2,
    time
  );

  envelope(
    bodyGain,
    finalLevel * (preset.bodyLevel ?? 0.7),
    time,
    preset.attack ?? 0.0005,
    preset.decay ?? bodyDur
  );

  body.connect(bodyFilter);
  bodyFilter.connect(bodyGain);
  bodyGain.connect(out);

  body.start(time);
  body.stop(time + bodyDur + 0.025);

  const noiseSrc = audio.createBufferSource();
  const noiseGain = audio.createGain();
  const noiseHp = audio.createBiquadFilter();
  const noiseBp = audio.createBiquadFilter();

  const noiseDur = preset.noiseDur ?? 0.15;

  noiseSrc.buffer = noise(noiseDur + 0.04);

  noiseHp.type = 'highpass';
  noiseHp.frequency.setValueAtTime(
    Math.max(800, freq * (preset.noiseHpRatio ?? 18)),
    time
  );

  noiseBp.type = 'bandpass';
  noiseBp.frequency.setValueAtTime(
    Math.min(
      15000,
      Math.max(1800, freq * (preset.noiseBpRatio ?? 48))
    ),
    time
  );

  noiseBp.Q.setValueAtTime(
    preset.noiseQ ?? 0.8,
    time
  );

  envelope(
    noiseGain,
    finalLevel * (preset.noiseLevel ?? 0.7),
    time,
    preset.attack ?? 0.0004,
    noiseDur
  );

  noiseSrc.connect(noiseHp);
  noiseHp.connect(noiseBp);
  noiseBp.connect(noiseGain);
  noiseGain.connect(out);

  noiseSrc.start(time);
  noiseSrc.stop(time + noiseDur + 0.015);

  const rim = audio.createOscillator();
  const rimGain = audio.createGain();

  const rimFreq = Math.min(
    audio.sampleRate * 0.4,
    Math.max(250, freq * (preset.rimRatio ?? 8))
  );

  rim.type =
    type === '909'
      ? 'square'
      : type === 'crushed'
        ? 'sawtooth'
        : 'triangle';

  rim.frequency.setValueAtTime(
    rimFreq,
    time
  );

  rim.frequency.exponentialRampToValueAtTime(
    Math.max(120, rimFreq * 0.55),
    time + (preset.rimDur ?? 0.006)
  );

  envelope(
    rimGain,
    finalLevel * (preset.rimLevel ?? 0.3),
    time,
    0.0001,
    preset.rimDur ?? 0.006
  );

  rim.connect(rimGain);
  rimGain.connect(out);

  rim.start(time);
  rim.stop(
    time + (preset.rimDur ?? 0.006) + 0.004
  );

  if ((preset.snapLevel ?? 0) > 0) {
    const snap = audio.createOscillator();
    const snapGain = audio.createGain();
    const snapFilter = audio.createBiquadFilter();

    const snapFreq = Math.min(
      audio.sampleRate * 0.45,
      Math.max(1000, freq * (preset.snapRatio ?? 20))
    );

    snap.type =
      type === '909'
        ? 'square'
        : 'triangle';

    snap.frequency.setValueAtTime(
      snapFreq,
      time
    );

    snap.frequency.exponentialRampToValueAtTime(
      Math.max(500, snapFreq * 0.35),
      time + (preset.snapDur ?? 0.004)
    );

    snapFilter.type = 'highpass';
    snapFilter.frequency.setValueAtTime(
      Math.max(900, freq * 7),
      time
    );

    envelope(
      snapGain,
      finalLevel * preset.snapLevel,
      time,
      0.00005,
      preset.snapDur ?? 0.004
    );

    snap.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(out);

    snap.start(time);
    snap.stop(
      time + (preset.snapDur ?? 0.004) + 0.003
    );
  }

  if ((preset.drive ?? 0) > 0) {
    const saturation = audio.createWaveShaper();

    const amount = preset.drive;

    const curve = new Float32Array(44100);

    for (let i = 0; i < curve.length; i++) {
      const x = (i * 2) / curve.length - 1;

      curve[i] =
        ((1 + amount * 10) * x) /
        (1 + amount * 10 * Math.abs(x));
    }

    saturation.curve = curve;
    saturation.oversample = '4x';
  }

  return;
}

  // 3. HAT (Hauteur dépendant de la note)
if (inst.voice === 'hat') {
  const hatGain = audio.createGain();
  const hp = audio.createBiquadFilter();
  const metal = audio.createBiquadFilter();
  const body = audio.createBiquadFilter();

  const hatDur = preset.dur || (0.03 + wx * 0.08);
  const level = finalLevel * 0.5;
  const hpFreq = preset.hpFreq || cutoffFreq;

  hp.type = 'highpass';
  hp.frequency.setValueAtTime(hpFreq, time);

  metal.type = 'bandpass';
  metal.frequency.setValueAtTime(
    preset.metalFreq || Math.max(7000, freq * 12),
    time
  );
  metal.Q.setValueAtTime(preset.metalQ || 0.8, time);

  body.type = 'highpass';
  body.frequency.setValueAtTime(
    preset.bodyFreq || Math.max(3000, freq * 5),
    time
  );

  const noiseSrc = audio.createBufferSource();
  const noiseGain = audio.createGain();

  noiseSrc.buffer = noise(Math.max(0.08, hatDur + 0.08));

  const attack = preset.attack || 0.001;
  const choke = preset.choke ?? 0.75;

  noiseGain.gain.setValueAtTime(0.0001, time);
  noiseGain.gain.exponentialRampToValueAtTime(
    Math.max(0.0002, level * (preset.noiseLevel || 1)),
    time + attack
  );
  noiseGain.gain.exponentialRampToValueAtTime(
    0.0001,
    time + Math.max(attack + 0.002, hatDur * choke)
  );

  noiseSrc.connect(hp);
  hp.connect(metal);
  metal.connect(noiseGain);
  noiseGain.connect(hatGain);

  if ((preset.bodyLevel || 0) > 0) {
    const bodySrc = audio.createBufferSource();
    const bodyGain = audio.createGain();

    bodySrc.buffer = noise(Math.max(0.05, hatDur + 0.05));

    bodyGain.gain.setValueAtTime(0.0001, time);
    bodyGain.gain.exponentialRampToValueAtTime(
      level * preset.bodyLevel,
      time + (preset.bodyAttack || 0.0015)
    );
    bodyGain.gain.exponentialRampToValueAtTime(
      0.0001,
      time + Math.max(0.004, hatDur * 0.55)
    );

    bodySrc.connect(body);
    body.connect(bodyGain);
    bodyGain.connect(hatGain);

    bodySrc.start(time);
    bodySrc.stop(time + hatDur + 0.04);
  }

  if (preset.metalRatios) {
    const metalGain = audio.createGain();

    metalGain.gain.setValueAtTime(0.0001, time);
    metalGain.gain.exponentialRampToValueAtTime(
      level * (preset.metalLevel || 0.35),
      time + (preset.metalAttack || 0.0005)
    );
    metalGain.gain.exponentialRampToValueAtTime(
      0.0001,
      time + hatDur
    );

    preset.metalRatios.forEach((ratio, index) => {
      const osc = audio.createOscillator();

      osc.type = preset.metalWave || 'square';

      osc.frequency.setValueAtTime(
        Math.max(5000, freq * ratio * 12),
        time
      );

      if (preset.detune) {
        osc.detune.setValueAtTime(
          index % 2 === 0 ? preset.detune : -preset.detune,
          time
        );
      }

      osc.connect(metalGain);

      osc.start(time);
      osc.stop(time + hatDur + 0.015);
    });

    metalGain.connect(hatGain);
  }

  if (preset.click) {
    const click = audio.createOscillator();
    const clickGain = audio.createGain();

    click.type = preset.clickWave || 'square';
    click.frequency.setValueAtTime(
      preset.clickFreq || Math.max(9000, freq * 18),
      time
    );

    clickGain.gain.setValueAtTime(
      level * (preset.clickLevel || 0.15),
      time
    );

    clickGain.gain.exponentialRampToValueAtTime(
      0.0001,
      time + (preset.clickDur || 0.004)
    );

    click.connect(clickGain);
    clickGain.connect(hatGain);

    click.start(time);
    click.stop(time + (preset.clickDur || 0.004) + 0.005);
  }

  hatGain.connect(out);

  noiseSrc.start(time);
  noiseSrc.stop(time + hatDur + 0.06);

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
  const type = preset.type || 'kalimba';

  const body = audio.createOscillator();
  const bodyGain = audio.createGain();
  const bodyFilter = audio.createBiquadFilter();

  const overtone = audio.createOscillator();
  const overtoneGain = audio.createGain();

  const bodyFreq = Math.max(45, freq);
  const harmonicRatio = preset.harmonicRatio ?? 2;
  const secondaryRatio = preset.secondaryRatio ?? 4;

  const decay = preset.decay ?? 0.3;
  const attack = preset.attack ?? 0.0008;

  body.type =
    type === 'wood'
      ? 'triangle'
      : type === 'metal'
      ? 'square'
      : type === 'hollow'
      ? 'sine'
      : waveType;

  body.frequency.setValueAtTime(bodyFreq, time);

  if (type === 'wood') {
    body.frequency.exponentialRampToValueAtTime(
      Math.max(40, bodyFreq * 0.78),
      time + 0.018
    );
  } else if (type === 'metal') {
    body.frequency.exponentialRampToValueAtTime(
      Math.max(50, bodyFreq * 0.91),
      time + 0.035
    );
  } else if (type === 'hollow') {
    body.frequency.exponentialRampToValueAtTime(
      Math.max(40, bodyFreq * 0.68),
      time + 0.055
    );
  } else {
    body.frequency.exponentialRampToValueAtTime(
      Math.max(40, bodyFreq * 0.84),
      time + 0.025
    );
  }

  bodyFilter.type =
    type === 'wood'
      ? 'bandpass'
      : type === 'metal'
      ? 'highpass'
      : type === 'hollow'
      ? 'lowpass'
      : 'bandpass';

  bodyFilter.frequency.setValueAtTime(
    type === 'wood'
      ? Math.min(8500, bodyFreq * 5.5)
      : type === 'metal'
      ? Math.min(13000, bodyFreq * 8)
      : type === 'hollow'
      ? Math.min(3200, bodyFreq * 2.7)
      : Math.min(7000, bodyFreq * 4.5),
    time
  );

  bodyFilter.Q.setValueAtTime(
    type === 'wood'
      ? 2.8
      : type === 'metal'
      ? 4.5
      : type === 'hollow'
      ? 1.6
      : 3.2,
    time
  );

  envelope(
    bodyGain,
    finalLevel * (preset.bodyLevel ?? 0.7),
    time,
    attack,
    decay
  );

  body.connect(bodyFilter);
  bodyFilter.connect(bodyGain);
  bodyGain.connect(out);

  overtone.type =
    type === 'metal'
      ? 'triangle'
      : 'sine';

  overtone.frequency.setValueAtTime(
    Math.min(16000, bodyFreq * harmonicRatio),
    time
  );

  envelope(
    overtoneGain,
    finalLevel * (preset.secondaryLevel ?? 0.25),
    time,
    Math.max(0.0002, attack * 0.8),
    decay * (
      type === 'wood'
        ? 0.45
        : type === 'metal'
        ? 0.75
        : 0.65
    )
  );

  overtone.connect(overtoneGain);
  overtoneGain.connect(out);

  body.start(time);
  overtone.start(time);

  body.stop(time + decay + 0.04);
  overtone.stop(time + decay + 0.04);

  if ((preset.noiseAmt ?? 0) > 0) {
    const click = audio.createBufferSource();
    const clickGain = audio.createGain();
    const clickFilter = audio.createBiquadFilter();

    const noiseDur = preset.noiseDur ?? 0.015;

    click.buffer = noise(noiseDur + 0.01);

    clickFilter.type =
      type === 'wood'
        ? 'bandpass'
        : type === 'metal'
        ? 'highpass'
        : 'highpass';

    clickFilter.frequency.setValueAtTime(
      type === 'wood'
        ? Math.min(9000, bodyFreq * 7)
        : type === 'metal'
        ? Math.min(15000, bodyFreq * 11)
        : Math.min(10000, bodyFreq * 6),
      time
    );

    clickFilter.Q.setValueAtTime(
      type === 'metal' ? 2.5 : 1.2,
      time
    );

    envelope(
      clickGain,
      finalLevel * (preset.noiseAmt ?? 0.05),
      time,
      0.0001,
      noiseDur
    );

    click.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(out);

    click.start(time);
    click.stop(time + noiseDur + 0.005);
  }

  if (type === 'metal') {
    const ring = audio.createOscillator();
    const ringGain = audio.createGain();

    ring.type = 'sine';

    ring.frequency.setValueAtTime(
      Math.min(16000, bodyFreq * secondaryRatio),
      time
    );

    envelope(
      ringGain,
      finalLevel * 0.16,
      time,
      0.0001,
      decay * 1.35
    );

    ring.connect(ringGain);
    ringGain.connect(out);

    ring.start(time);
    ring.stop(time + decay * 1.35 + 0.04);
  }

  return;
}

  // 6. PLUCK
  if (inst.voice === 'pluck') {
  const type = preset.type || 'electric';

  const carrier = audio.createOscillator();
  const modulator = audio.createOscillator();

  const modGain = audio.createGain();
  const bodyGain = audio.createGain();
  const harmonicGain = audio.createGain();

  const filter = audio.createBiquadFilter();

  const ratio = preset.fmRatio ?? 1.5;
  const fmAmount = preset.fmMod ?? 1;

  const decay = preset.decay ?? Math.max(0.12, len * 0.5);
  const attack = preset.attack ?? 0.0005;

  carrier.type =
    type === 'nylon'
      ? 'sine'
      : type === 'electric'
      ? 'triangle'
      : type === 'glass'
      ? 'sine'
      : 'sawtooth';

  modulator.type =
    type === 'sitar'
      ? 'triangle'
      : 'sine';

  carrier.frequency.setValueAtTime(
    Math.max(25, freq),
    time
  );

  modulator.frequency.setValueAtTime(
    Math.min(18000, Math.max(30, freq * ratio)),
    time
  );

  modGain.gain.setValueAtTime(
    Math.max(0.01, freq * fmAmount),
    time
  );

  modGain.gain.exponentialRampToValueAtTime(
    Math.max(0.01, freq * fmAmount * (
      type === 'glass'
        ? 0.12
        : type === 'sitar'
        ? 0.3
        : 0.06
    )),
    time + (
      type === 'nylon'
        ? 0.045
        : type === 'electric'
        ? 0.025
        : type === 'glass'
        ? 0.075
        : 0.018
    )
  );

  modulator.connect(modGain);
  modGain.connect(carrier.frequency);

  filter.type =
    type === 'nylon'
      ? 'lowpass'
      : type === 'electric'
      ? 'lowpass'
      : type === 'glass'
      ? 'highpass'
      : 'bandpass';

  filter.frequency.setValueAtTime(
    type === 'nylon'
      ? Math.min(4200, freq * 7)
      : type === 'electric'
      ? Math.min(9000, freq * 13)
      : type === 'glass'
      ? Math.min(15000, freq * 18)
      : Math.min(7000, freq * 10),
    time
  );

  filter.Q.setValueAtTime(
    type === 'nylon'
      ? 0.7
      : type === 'electric'
      ? 1.4
      : type === 'glass'
      ? 3.2
      : 2.6,
    time
  );

  envelope(
    bodyGain,
    finalLevel * (preset.bodyLevel ?? 0.7),
    time,
    attack,
    decay
  );

  carrier.connect(filter);
  filter.connect(bodyGain);
  bodyGain.connect(out);

  const harmonic = audio.createOscillator();

  harmonic.type =
    type === 'sitar'
      ? 'triangle'
      : type === 'glass'
      ? 'square'
      : 'sine';

  const harmonicRatio =
    type === 'nylon'
      ? 2.01
      : type === 'electric'
      ? 3.01
      : type === 'glass'
      ? 6.13
      : 2.47;

  harmonic.frequency.setValueAtTime(
    Math.min(18000, freq * harmonicRatio),
    time
  );

  envelope(
    harmonicGain,
    finalLevel * (preset.harmonicLevel ?? 0.2),
    time,
    Math.max(0.0001, attack * 0.7),
    decay * (
      type === 'nylon'
        ? 0.55
        : type === 'glass'
        ? 0.7
        : 0.42
    )
  );

  harmonic.connect(harmonicGain);
  harmonicGain.connect(out);

  carrier.start(time);
  modulator.start(time);
  harmonic.start(time);

  carrier.stop(time + decay + 0.06);
  modulator.stop(time + decay + 0.06);
  harmonic.stop(time + decay + 0.06);

  if ((preset.noiseAmt ?? 0) > 0) {
    const pick = audio.createBufferSource();
    const pickGain = audio.createGain();
    const pickFilter = audio.createBiquadFilter();

    const pickDur = preset.noiseDur ?? 0.01;

    pick.buffer = noise(pickDur + 0.008);

    pickFilter.type =
      type === 'nylon'
        ? 'lowpass'
        : type === 'glass'
        ? 'highpass'
        : 'bandpass';

    pickFilter.frequency.setValueAtTime(
      type === 'nylon'
        ? Math.min(3500, freq * 4)
        : type === 'electric'
        ? Math.min(8500, freq * 12)
        : type === 'glass'
        ? Math.min(15000, freq * 20)
        : Math.min(7000, freq * 14),
      time
    );

    envelope(
      pickGain,
      finalLevel * (preset.noiseAmt ?? 0.05),
      time,
      0.00005,
      pickDur
    );

    pick.connect(pickFilter);
    pickFilter.connect(pickGain);
    pickGain.connect(out);

    pick.start(time);
    pick.stop(time + pickDur + 0.004);
  }

  return;
}

  // 7. RHODES
  if (inst.voice === 'rhodes') {
  const type = preset.type || 'suitcase';

  const body = audio.createOscillator();
  const bodyGain = audio.createGain();

  const tine = audio.createOscillator();
  const tineGain = audio.createGain();

  const tineFilter = audio.createBiquadFilter();

  const bodyFilter = audio.createBiquadFilter();

  const bodyFreq = Math.max(35, freq);

  const tineRatio = preset.tineRatio ?? 2.5;
  const tineFreq = Math.min(18000, bodyFreq * tineRatio);

  const release = preset.release ?? 0.8;

  body.type =
    type === 'hard'
      ? 'triangle'
      : type === 'dirty'
      ? 'sawtooth'
      : 'sine';

  body.frequency.setValueAtTime(bodyFreq, time);

  bodyFilter.type = 'lowpass';

  bodyFilter.frequency.setValueAtTime(
    preset.cutoff ?? (
      type === 'suitcase'
        ? Math.min(4200, bodyFreq * 12)
        : type === 'hard'
        ? Math.min(8500, bodyFreq * 20)
        : type === 'dirty'
        ? Math.min(6500, bodyFreq * 16)
        : Math.min(6000, bodyFreq * 15)
    ),
    time
  );

  bodyFilter.Q.setValueAtTime(
    preset.resonance ?? 1.2,
    time
  );

  envelope(
    bodyGain,
    finalLevel * (preset.bodyLevel ?? 0.7),
    time,
    0.003,
    len * release
  );

  body.connect(bodyFilter);
  bodyFilter.connect(bodyGain);
  bodyGain.connect(out);

  tine.type =
    type === 'hard'
      ? 'square'
      : type === 'dirty'
      ? 'sawtooth'
      : 'triangle';

  tine.frequency.setValueAtTime(
    tineFreq,
    time
  );

  tineFilter.type =
    type === 'suitcase'
      ? 'bandpass'
      : type === 'hard'
      ? 'highpass'
      : type === 'dirty'
      ? 'bandpass'
      : 'highpass';

  tineFilter.frequency.setValueAtTime(
    type === 'suitcase'
      ? Math.min(7000, tineFreq * 1.3)
      : type === 'hard'
      ? Math.min(15000, tineFreq * 1.8)
      : type === 'dirty'
      ? Math.min(11000, tineFreq * 1.45)
      : Math.min(13000, tineFreq * 1.6),
    time
  );

  tineFilter.Q.setValueAtTime(
    type === 'suitcase'
      ? 1.8
      : type === 'hard'
      ? 4.2
      : type === 'dirty'
      ? 3.5
      : 2.5,
    time
  );

  envelope(
    tineGain,
    finalLevel * (preset.tineVol ?? 0.3),
    time,
    preset.tineAttack ?? 0.001,
    preset.tineDecay ?? 0.08
  );

  tine.connect(tineFilter);
  tineFilter.connect(tineGain);
  tineGain.connect(out);

  body.start(time);
  tine.start(time);

  body.stop(
    time + len * release + 0.08
  );

  tine.stop(
    time + Math.max(0.08, preset.tineDecay ?? 0.08) + 0.04
  );

  if (type === 'chorus') {
    const chorus = audio.createOscillator();
    const chorusGain = audio.createGain();
    const chorusFilter = audio.createBiquadFilter();

    chorus.type = 'triangle';

    chorus.frequency.setValueAtTime(
      bodyFreq,
      time
    );

    chorus.detune.setValueAtTime(
      -(preset.detune ?? 7),
      time
    );

    chorusFilter.type = 'lowpass';

    chorusFilter.frequency.setValueAtTime(
      Math.min(5200, bodyFreq * 14),
      time
    );

    envelope(
      chorusGain,
      finalLevel * 0.42,
      time,
      0.006,
      len * release * 0.9
    );

    chorus.connect(chorusFilter);
    chorusFilter.connect(chorusGain);
    chorusGain.connect(out);

    chorus.start(time);
    chorus.stop(
      time + len * release + 0.08
    );
  }

  if (type === 'dirty' && (preset.drive ?? 0) > 0) {
    const drive = audio.createWaveShaper();

    const amount = preset.drive;
    const curve = new Float32Array(44100);

    for (let i = 0; i < curve.length; i++) {
      const x = (i * 2) / curve.length - 1;

      curve[i] =
        ((1 + amount * 14) * x) /
        (1 + amount * 14 * Math.abs(x));
    }

    drive.curve = curve;
    drive.oversample = '4x';

    tineFilter.disconnect();
    tineFilter.connect(drive);
    drive.connect(tineGain);
  }

  if (
    type === 'hard' ||
    type === 'dirty'
  ) {
    const attack = audio.createBufferSource();
    const attackGain = audio.createGain();
    const attackFilter = audio.createBiquadFilter();

    attack.buffer = noise(
      type === 'hard'
        ? 0.009
        : 0.014
    );

    attackFilter.type = 'bandpass';

    attackFilter.frequency.setValueAtTime(
      Math.min(
        15000,
        Math.max(
          3000,
          bodyFreq * (
            type === 'hard'
              ? 11
              : 8
          )
        )
      ),
      time
    );

    attackFilter.Q.setValueAtTime(
      type === 'hard' ? 3.5 : 2.2,
      time
    );

    envelope(
      attackGain,
      finalLevel * (
        type === 'hard'
          ? 0.18
          : 0.12
      ),
      time,
      0.00005,
      type === 'hard'
        ? 0.008
        : 0.012
    );

    attack.connect(attackFilter);
    attackFilter.connect(attackGain);
    attackGain.connect(out);

    attack.start(time);
    attack.stop(
      time + (
        type === 'hard'
          ? 0.012
          : 0.018
      )
    );
  }

  return;
}

  // 8. BRASS
  if (inst.voice === 'brass') {
  const type = preset.type || 'section';

  const osc1 = audio.createOscillator();
  const osc2 = audio.createOscillator();

  const gain1 = audio.createGain();
  const gain2 = audio.createGain();

  const filter1 = audio.createBiquadFilter();
  const filter2 = audio.createBiquadFilter();

  const bodyFreq = Math.max(45, freq);

  const detune1 = preset.detune ?? 8;
  const detune2 = preset.secondDetune ?? -6;

  osc1.type =
    type === 'muted'
      ? 'triangle'
      : type === 'trumpet'
      ? 'sawtooth'
      : 'sawtooth';

  osc2.type =
    type === 'muted'
      ? 'sine'
      : type === 'massive'
      ? 'sawtooth'
      : 'square';

  osc1.frequency.setValueAtTime(
    bodyFreq,
    time
  );

  osc2.frequency.setValueAtTime(
    bodyFreq,
    time
  );

  osc1.detune.setValueAtTime(
    detune1,
    time
  );

  osc2.detune.setValueAtTime(
    detune2,
    time
  );

  const startCutoff =
    preset.cutoffStart ??
    (
      type === 'muted'
        ? 500
        : 900
    );

  const endCutoff =
    preset.cutoffEnd ??
    (
      type === 'trumpet'
        ? 8500
        : 6000
    );

  filter1.type = 'lowpass';
  filter2.type = 'lowpass';

  filter1.frequency.setValueAtTime(
    Math.min(
      14000,
      Math.max(
        250,
        startCutoff
      )
    ),
    time
  );

  filter2.frequency.setValueAtTime(
    Math.min(
      14000,
      Math.max(
        300,
        startCutoff * (
          type === 'massive'
            ? 1.15
            : 0.9
        )
      )
    ),
    time
  );

  filter1.frequency.exponentialRampToValueAtTime(
    Math.min(
      15000,
      Math.max(
        500,
        endCutoff
      )
    ),
    time + (
      type === 'muted'
        ? 0.16
        : type === 'trumpet'
        ? 0.045
        : 0.075
    )
  );

  filter2.frequency.exponentialRampToValueAtTime(
    Math.min(
      15000,
      Math.max(
        500,
        endCutoff * (
          type === 'massive'
            ? 0.82
            : 0.9
        )
      )
    ),
    time + (
      type === 'muted'
        ? 0.2
        : 0.09
    )
  );

  filter1.Q.setValueAtTime(
    preset.resonance ?? 2,
    time
  );

  filter2.Q.setValueAtTime(
    Math.max(
      0.5,
      (preset.resonance ?? 2) * 0.72
    ),
    time
  );

  envelope(
    gain1,
    finalLevel * (
      preset.bodyLevel ?? 0.7
    ),
    time,
    preset.attack ?? 0.02,
    len * (
      preset.release ?? 0.35
    )
  );

  envelope(
    gain2,
    finalLevel * (
      preset.secondLevel ?? 0.35
    ),
    time,
    Math.max(
      0.001,
      (preset.attack ?? 0.02) * 0.65
    ),
    len * (
      preset.release ?? 0.3
    )
  );

  osc1.connect(filter1);
  filter1.connect(gain1);
  gain1.connect(out);

  osc2.connect(filter2);
  filter2.connect(gain2);
  gain2.connect(out);

  osc1.start(time);
  osc2.start(time);

  osc1.stop(
    time +
    len * (preset.release ?? 0.35) +
    0.08
  );

  osc2.stop(
    time +
    len * (preset.release ?? 0.3) +
    0.08
  );

  if ((preset.breathLevel ?? 0) > 0) {
    const breath = audio.createBufferSource();
    const breathGain = audio.createGain();
    const breathFilter = audio.createBiquadFilter();

    const breathDur =
      preset.breathDur ?? 0.06;

    breath.buffer = noise(
      breathDur + 0.02
    );

    breathFilter.type =
      type === 'muted'
        ? 'lowpass'
        : 'bandpass';

    breathFilter.frequency.setValueAtTime(
      type === 'trumpet'
        ? Math.min(
            12000,
            bodyFreq * 7
          )
        : type === 'muted'
        ? Math.min(
            4200,
            bodyFreq * 3
          )
        : Math.min(
            8000,
            bodyFreq * 5
          ),
      time
    );

    breathFilter.Q.setValueAtTime(
      type === 'trumpet'
        ? 2.8
        : 1.2,
      time
    );

    envelope(
      breathGain,
      finalLevel *
      preset.breathLevel,
      time,
      0.0005,
      breathDur
    );

    breath.connect(breathFilter);
    breathFilter.connect(breathGain);
    breathGain.connect(out);

    breath.start(time);
    breath.stop(
      time +
      breathDur +
      0.01
    );
  }

  if (
    type === 'trumpet' ||
    type === 'massive'
  ) {
    const bite = audio.createOscillator();
    const biteGain = audio.createGain();
    const biteFilter = audio.createBiquadFilter();

    bite.type =
      type === 'trumpet'
        ? 'square'
        : 'sawtooth';

    bite.frequency.setValueAtTime(
      Math.min(
        16000,
        bodyFreq * (
          type === 'trumpet'
            ? 3.02
            : 2.01
        )
      ),
      time
    );

    biteFilter.type = 'bandpass';

    biteFilter.frequency.setValueAtTime(
      Math.min(
        12000,
        bodyFreq * 5.5
      ),
      time
    );

    biteFilter.Q.setValueAtTime(
      type === 'trumpet'
        ? 4
        : 2.5,
      time
    );

    envelope(
      biteGain,
      finalLevel * (
        type === 'trumpet'
          ? 0.16
          : 0.1
      ),
      time,
      0.0001,
      type === 'trumpet'
        ? 0.035
        : 0.055
    );

    bite.connect(biteFilter);
    biteFilter.connect(biteGain);
    biteGain.connect(out);

    bite.start(time);
    bite.stop(
      time +
      (
        type === 'trumpet'
          ? 0.045
          : 0.07
      )
    );
  }

  if (type === 'massive') {
    const drive = audio.createWaveShaper();

    const amount =
      preset.drive ?? 0.18;

    const curve =
      new Float32Array(44100);

    for (
      let i = 0;
      i < curve.length;
      i++
    ) {
      const x =
        (i * 2) /
        curve.length -
        1;

      curve[i] =
        ((1 + amount * 12) * x) /
        (
          1 +
          amount * 12 *
          Math.abs(x)
        );
    }

    drive.curve = curve;
    drive.oversample = '4x';

    filter1.disconnect();
    filter1.connect(drive);
    drive.connect(gain1);
  }

  return;
}

  // 9. BELL
  if (inst.voice === 'bell') {
  const type = preset.type || 'crystal';

  const carrier = audio.createOscillator();
  const modulator = audio.createOscillator();

  const modGain = audio.createGain();
  const gain = audio.createGain();

  const bodyFilter = audio.createBiquadFilter();

  const bellFreq = Math.max(45, freq);

  const ratio = preset.fmRatio ?? 2.5;
  const depth = preset.modDepth ?? 2.5;
  const decayMult = preset.decayMult ?? 2;

  const attack = preset.attack ?? 0.001;

  carrier.type =
    type === 'bronze'
      ? 'sine'
      : type === 'tubular'
      ? 'sine'
      : type === 'musicbox'
      ? 'triangle'
      : 'sine';

  modulator.type =
    type === 'bronze'
      ? 'sine'
      : type === 'tubular'
      ? 'triangle'
      : 'sine';

  carrier.frequency.setValueAtTime(
    bellFreq,
    time
  );

  modulator.frequency.setValueAtTime(
    bellFreq * ratio,
    time
  );

  modGain.gain.setValueAtTime(
    bellFreq * depth,
    time
  );

  modGain.gain.exponentialRampToValueAtTime(
    0.01,
    time + 0.12 * decayMult
  );

  modulator.connect(modGain);
  modGain.connect(carrier.frequency);

  bodyFilter.type =
    type === 'bronze'
      ? 'lowpass'
      : type === 'tubular'
      ? 'lowpass'
      : 'highpass';

  bodyFilter.frequency.setValueAtTime(
    type === 'crystal'
      ? Math.min(14000, bellFreq * 12)
      : type === 'musicbox'
      ? Math.min(11000, bellFreq * 9)
      : type === 'bronze'
      ? Math.min(6500, bellFreq * 7)
      : Math.min(5200, bellFreq * 5),
    time
  );

  bodyFilter.Q.setValueAtTime(
    type === 'crystal'
      ? 1.8
      : type === 'musicbox'
      ? 2.8
      : type === 'bronze'
      ? 1.1
      : 0.8,
    time
  );

  envelope(
    gain,
    finalLevel *
      (preset.harmonicLevel ?? 0.5),
    time,
    attack,
    len * decayMult
  );

  carrier.connect(bodyFilter);
  bodyFilter.connect(gain);
  gain.connect(out);

  carrier.start(time);
  modulator.start(time);

  carrier.stop(
    time +
      len * decayMult +
      0.15
  );

  modulator.stop(
    time +
      len * decayMult +
      0.15
  );

  if ((preset.highLevel ?? 0) > 0) {
    const high = audio.createOscillator();
    const highGain = audio.createGain();
    const highFilter = audio.createBiquadFilter();

    const highFreq = Math.min(
      audio.sampleRate * 0.42,
      bellFreq * (
        preset.highRatio ?? 5
      )
    );

    high.type =
      type === 'musicbox'
        ? 'square'
        : type === 'crystal'
        ? 'sine'
        : 'triangle';

    high.frequency.setValueAtTime(
      highFreq,
      time
    );

    highFilter.type = 'bandpass';

    highFilter.frequency.setValueAtTime(
      Math.min(
        16000,
        highFreq
      ),
      time
    );

    highFilter.Q.setValueAtTime(
      type === 'crystal'
        ? 4.5
        : type === 'musicbox'
        ? 6
        : 2,
      time
    );

    envelope(
      highGain,
      finalLevel *
        preset.highLevel,
      time,
      Math.max(
        0.0001,
        attack * 0.5
      ),
      len *
        (preset.highDecay ?? 0.5)
    );

    high.connect(highFilter);
    highFilter.connect(highGain);
    highGain.connect(out);

    high.start(time);

    high.stop(
      time +
        len *
          (preset.highDecay ?? 0.5) +
        0.06
    );
  }

  if (
    type === 'crystal' ||
    type === 'musicbox'
  ) {
    const click = audio.createBufferSource();
    const clickGain = audio.createGain();
    const clickFilter = audio.createBiquadFilter();

    const clickDur =
      type === 'crystal'
        ? 0.008
        : 0.012;

    click.buffer = noise(
      clickDur + 0.01
    );

    clickFilter.type = 'bandpass';

    clickFilter.frequency.setValueAtTime(
      Math.min(
        15000,
        Math.max(
          5000,
          bellFreq * (
            type === 'crystal'
              ? 14
              : 9
          )
        )
      ),
      time
    );

    clickFilter.Q.setValueAtTime(
      type === 'crystal'
        ? 5
        : 3,
      time
    );

    envelope(
      clickGain,
      finalLevel *
        (
          type === 'crystal'
            ? 0.13
            : 0.09
        ),
      time,
      0.00005,
      clickDur
    );

    click.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(out);

    click.start(time);

    click.stop(
      time +
        clickDur +
        0.005
    );
  }

  return;
}

  // 10. FLUTE
  if (inst.voice === 'flute') {
  const type = preset.type || 'bamboo';

  const osc = audio.createOscillator();
  const gain = audio.createGain();

  const filter = audio.createBiquadFilter();

  const vibrato = audio.createOscillator();
  const vibratoGain = audio.createGain();

  const fluteFreq = Math.max(
    80,
    freq
  );

  osc.type =
    type === 'bamboo'
      ? 'sine'
      : type === 'concert'
      ? 'triangle'
      : type === 'air'
      ? 'sine'
      : 'triangle';

  osc.frequency.setValueAtTime(
    fluteFreq,
    time
  );

  vibrato.type =
    type === 'air'
      ? 'sine'
      : 'triangle';

  vibrato.frequency.setValueAtTime(
    preset.vibratoFreq ??
      (
        type === 'concert'
          ? 5
          : 3
      ),
    time
  );

  vibratoGain.gain.setValueAtTime(
    fluteFreq *
      (
        preset.vibratoDepth ??
        0.012
      ),
    time
  );

  vibrato.connect(vibratoGain);
  vibratoGain.connect(osc.frequency);

  filter.type =
    type === 'bamboo'
      ? 'lowpass'
      : type === 'concert'
      ? 'lowpass'
      : type === 'air'
      ? 'lowpass'
      : 'bandpass';

  filter.frequency.setValueAtTime(
    Math.min(
      15000,
      Math.max(
        1000,
        preset.cutoff ??
          fluteFreq * 5
      )
    ),
    time
  );

  filter.Q.setValueAtTime(
    preset.resonance ??
      1,
    time
  );

  envelope(
    gain,
    finalLevel *
      (
        preset.bodyLevel ??
        0.7
      ),
    time,
    preset.attack ??
      0.03,
    len *
      (
        preset.release ??
        0.5
      )
  );

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(out);

  osc.start(time);
  vibrato.start(time);

  osc.stop(
    time +
      len *
        (
          preset.release ??
          0.5
        ) +
      0.08
  );

  vibrato.stop(
    time +
      len *
        (
          preset.release ??
          0.5
        ) +
      0.08
  );

  if (
    (preset.noiseAmt ?? 0) > 0
  ) {
    const breath =
      audio.createBufferSource();

    const breathGain =
      audio.createGain();

    const breathFilter =
      audio.createBiquadFilter();

    const breathDur =
      Math.max(
        0.04,
        len *
          (
            preset.breathDecay ??
            0.15
          )
      );

    breath.buffer =
      noise(
        breathDur + 0.05
      );

    breathFilter.type =
      type === 'bamboo'
        ? 'bandpass'
        : type === 'concert'
        ? 'highpass'
        : type === 'air'
        ? 'bandpass'
        : 'bandpass';

    breathFilter.frequency.setValueAtTime(
      Math.min(
        15000,
        Math.max(
          900,
          fluteFreq *
            (
              preset.noiseFreqRatio ??
              3
            )
        )
      ),
      time
    );

    breathFilter.Q.setValueAtTime(
      preset.noiseQ ??
        1,
      time
    );

    envelope(
      breathGain,
      finalLevel *
        (
          preset.breathLevel ??
          preset.noiseAmt ??
          0.15
        ),
      time,
      preset.breathAttack ??
        0.015,
      breathDur
    );

    breath.connect(
      breathFilter
    );

    breathFilter.connect(
      breathGain
    );

    breathGain.connect(out);

    breath.start(time);

    breath.stop(
      time +
        breathDur +
        0.02
    );
  }

  if (
    type === 'bamboo' ||
    type === 'wood'
  ) {
    const harmonic =
      audio.createOscillator();

    const harmonicGain =
      audio.createGain();

    harmonic.type =
      type === 'bamboo'
        ? 'triangle'
        : 'sawtooth';

    harmonic.frequency.setValueAtTime(
      fluteFreq *
        (
          type === 'bamboo'
            ? 2.01
            : 2.97
        ),
      time
    );

    envelope(
      harmonicGain,
      finalLevel *
        (
          type === 'bamboo'
            ? 0.075
            : 0.11
        ),
      time,
      0.008,
      len *
        (
          type === 'bamboo'
            ? 0.55
            : 0.4
        )
    );

    harmonic.connect(
      harmonicGain
    );

    harmonicGain.connect(
      out
    );

    harmonic.start(time);

    harmonic.stop(
      time +
        len *
          (
            type === 'bamboo'
              ? 0.55
              : 0.4
          ) +
        0.05
    );
  }

  if (type === 'concert') {
    const shimmer =
      audio.createOscillator();

    const shimmerGain =
      audio.createGain();

    shimmer.type = 'sine';

    shimmer.frequency.setValueAtTime(
      Math.min(
        16000,
        fluteFreq * 3.01
      ),
      time
    );

    envelope(
      shimmerGain,
      finalLevel * 0.055,
      time,
      0.004,
      len * 0.32
    );

    shimmer.connect(
      shimmerGain
    );

    shimmerGain.connect(
      out
    );

    shimmer.start(time);

    shimmer.stop(
      time +
        len * 0.32 +
        0.04
    );
  }

  if (type === 'air') {
    const air =
      audio.createOscillator();

    const airGain =
      audio.createGain();

    const airFilter =
      audio.createBiquadFilter();

    air.type = 'sine';

    air.frequency.setValueAtTime(
      fluteFreq *
        1.005,
      time
    );

    air.detune.setValueAtTime(
      -7,
      time
    );

    airFilter.type =
      'lowpass';

    airFilter.frequency.setValueAtTime(
      Math.min(
        9000,
        fluteFreq * 6
      ),
      time
    );

    envelope(
      airGain,
      finalLevel * 0.18,
      time,
      0.08,
      len * 0.9
    );

    air.connect(
      airFilter
    );

    airFilter.connect(
      airGain
    );

    airGain.connect(
      out
    );

    air.start(time);

    air.stop(
      time +
        len * 0.9 +
        0.08
    );
  }

  return;
}

  // 11. PAD
  if (inst.voice === 'pad') {
  const type = preset.type || 'juno';

  const osc1 = audio.createOscillator();
  const osc2 = audio.createOscillator();
  const osc3 = audio.createOscillator();

  const filter = audio.createBiquadFilter();
  const gain = audio.createGain();

  const osc2Gain = audio.createGain();
  const osc3Gain = audio.createGain();

  const padFreq = Math.max(25, freq);

  const detune1 = preset.detune ?? (4 + wx * 10);
  const detune2 = preset.detune2 ?? (9 + wx * 18);

  osc1.type =
    type === 'glass'
      ? 'triangle'
      : type === 'tape'
      ? 'triangle'
      : type === 'poly'
      ? 'sawtooth'
      : waveType;

  osc2.type =
    type === 'glass'
      ? 'sine'
      : type === 'tape'
      ? 'triangle'
      : 'sawtooth';

  osc3.type =
    type === 'glass'
      ? 'sine'
      : type === 'tape'
      ? 'sine'
      : 'triangle';

  osc1.frequency.setValueAtTime(padFreq, time);
  osc2.frequency.setValueAtTime(padFreq, time);
  osc3.frequency.setValueAtTime(padFreq * 2, time);

  osc1.detune.setValueAtTime(-detune1, time);
  osc2.detune.setValueAtTime(detune1, time);
  osc3.detune.setValueAtTime(detune2, time);

  osc2Gain.gain.value =
    type === 'glass'
      ? 0.32
      : type === 'tape'
      ? 0.42
      : type === 'poly'
      ? 0.58
      : 0.52;

  osc3Gain.gain.value =
    type === 'glass'
      ? 0.24
      : type === 'tape'
      ? 0.16
      : type === 'poly'
      ? 0.22
      : 0.28;

  filter.type = 'lowpass';

  const baseCutoff =
    preset.cutoff ??
    (type === 'glass'
      ? 6500
      : 2200 + wy * 3000);

  const filterStart =
    type === 'tape'
      ? Math.max(500, baseCutoff * 0.28)
      : type === 'glass'
      ? Math.max(1200, baseCutoff * 0.5)
      : Math.max(350, baseCutoff * 0.45);

  filter.frequency.setValueAtTime(
    filterStart,
    time
  );

  filter.frequency.exponentialRampToValueAtTime(
    Math.min(15000, baseCutoff),
    time + (preset.filterAttack ?? preset.attack ?? 0.5)
  );

  filter.Q.setValueAtTime(
    preset.resonance ?? 2,
    time
  );

  const attack =
    preset.attack ??
    (type === 'glass'
      ? 0.8
      : type === 'tape'
      ? 1.0
      : 0.3);

  const release =
    preset.release ??
    (type === 'glass'
      ? 3
      : type === 'tape'
      ? 2.4
      : 1.4);

  const sustainLen =
    Math.max(0.2, len) * release;

  const padLevel =
    finalLevel *
    (preset.level ?? 0.3);

  gain.gain.setValueAtTime(
    0.0001,
    time
  );

  gain.gain.exponentialRampToValueAtTime(
    Math.max(0.0001, padLevel),
    time + attack
  );

  gain.gain.setValueAtTime(
    Math.max(0.0001, padLevel),
    time + attack + Math.max(0.01, len)
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    time + attack + Math.max(0.01, len) + sustainLen
  );

  if (type === 'tape') {
    const drift = audio.createOscillator();
    const driftGain = audio.createGain();

    drift.type = 'sine';
    drift.frequency.setValueAtTime(
      0.18 + wx * 0.22,
      time
    );

    driftGain.gain.setValueAtTime(
      2 + wy * 7,
      time
    );

    drift.connect(driftGain);
    driftGain.connect(osc1.detune);
    driftGain.connect(osc2.detune);

    drift.start(time);
    drift.stop(
      time + attack + Math.max(0.01, len) + sustainLen
    );
  }

  if (type === 'poly') {
    const shimmer = audio.createOscillator();
    const shimmerGain = audio.createGain();

    shimmer.type = 'sine';

    shimmer.frequency.setValueAtTime(
      padFreq * 2,
      time
    );

    shimmerGain.gain.setValueAtTime(
      0,
      time
    );

    shimmerGain.gain.linearRampToValueAtTime(
      padLevel * 0.12,
      time + attack + 0.08
    );

    shimmerGain.gain.exponentialRampToValueAtTime(
      0.0001,
      time + attack + Math.max(0.01, len) + 0.5
    );

    shimmer.connect(shimmerGain);
    shimmerGain.connect(out);

    shimmer.start(time);
    shimmer.stop(
      time + attack + Math.max(0.01, len) + 0.55
    );
  }

  if (type === 'glass') {
    const air = audio.createBufferSource();
    const airFilter = audio.createBiquadFilter();
    const airGain = audio.createGain();

    const noiseAmt =
      preset.noiseAmt ?? 0.02;

    air.buffer = noise(
      Math.max(
        0.2,
        len + sustainLen
      )
    );

    airFilter.type = 'highpass';
    airFilter.frequency.setValueAtTime(
      4200 + wy * 2500,
      time
    );

    airFilter.Q.setValueAtTime(
      0.7,
      time
    );

    airGain.gain.setValueAtTime(
      0.0001,
      time
    );

    airGain.gain.exponentialRampToValueAtTime(
      Math.max(0.0001, finalLevel * noiseAmt),
      time + attack
    );

    airGain.gain.exponentialRampToValueAtTime(
      0.0001,
      time + attack + Math.max(0.01, len) + 1.2
    );

    air.connect(airFilter);
    airFilter.connect(airGain);
    airGain.connect(out);

    air.start(time);
    air.stop(
      time + attack + Math.max(0.01, len) + 1.25
    );
  }

  osc1.connect(filter);
  osc2.connect(osc2Gain);
  osc3.connect(osc3Gain);

  osc2Gain.connect(filter);
  osc3Gain.connect(filter);

  filter.connect(gain);
  gain.connect(out);

  const stopTime =
    time +
    attack +
    Math.max(0.01, len) +
    sustainLen +
    0.08;

  osc1.start(time);
  osc2.start(time);
  osc3.start(time);

  osc1.stop(stopTime);
  osc2.stop(stopTime);
  osc3.stop(stopTime);

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
  document.querySelectorAll('.playing').forEach(cell => {
    cell.classList.remove('playing');
  });

  document.querySelectorAll(`[data-step="${step}"]`).forEach(cell => {
    cell.classList.add('playing');
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

  container.style.position = 'relative';

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
          ${states.map((value, step) => `<i data-step="${step}" class="${value ? 'active' : ''} ${value === 2 ? 'linked' : ''}"></i>`).join('')}
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
