export function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

export function addNumberSuffix(str: string) {
    switch (str.at(-1)) {
        case '1':
            return str+'st'
        case '2':
            return str+'nd'
        case '3':
            return str+'rd'
        default:
            return str+'th'
    }
}

export function StatusToReadable(str: string) {
    switch (str) {
        case 'FINISHED':
            return 'finnished'
        case 'RELEASING':
            return 'ongoing'
    }
}