export function description(level) {
  if (level <= 0.3) {
    return 'you are sober';

  } else if (level > 0.3 && level <= 0.5) {
    return 'you are slightly intoxicated';

  } else if (level > 0.5 && level <= 1.5) {
    return 'you are a little drunk';

  } else if (level > 1.5 && level <= 2.5) {
    return 'you are well drunk';

  } else if (level > 2.5 && level <= 3.0) {
    return 'you\'re in shit';

  } else if (level > 3.0 && level <= 5.0) {
    return 'it\'s time to go to the hospital';

  } else if (level >= 5.0) {
    return 'you are a corpse';
  }
}