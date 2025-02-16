function doGet(e) {
  // Récupération des paramètres
  const user = e.parameter.user

  // Vérification du paramètre user
  if (!user) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: 'Paramètre user manquant',
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }

  try {
    // Récupération du classeur actif
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Logs')

    if (!sheet) {
      throw new Error('Feuille "Logs" non trouvée')
    }

    // Ajout d'une nouvelle ligne avec timestamp
    const timestamp = new Date().toISOString()
    sheet.appendRow([timestamp, user])

    // Retour d'une réponse positive
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Enregistrement effectué',
        data: { timestamp, user },
      })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Retour d'une réponse d'erreur
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}
