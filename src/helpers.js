function bytesToHumanReadable (bytes) {
  if (!+bytes) return '0 B'
  if (bytes < 1024) {
    return bytes + ' Bytes'
  }
  const UNITS = ['kB', 'MB', 'GB']
  let dp = -1
  do {
    bytes /= 1024
    dp++
  } while (bytes >= 1024 && dp < UNITS.length - 1)
  return bytes.toFixed(dp) + ' ' + UNITS[dp]
}

export { bytesToHumanReadable }
