export function formatForLink(text: string) {
  const link = removeAccent(text).replace(/\W/g, "-").toLowerCase()
  return link
}

function removeAccent(text: string) {
  const unaccentedText = text.normalize("NFD").replace(/[^a-z\s]/gi, "")
  return unaccentedText
}
