function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en', // idioma padrão da página
      includedLanguages: 'en,pt', // idiomas que você deseja permitir para tradução
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    'google_translate_element'
  );

  // Detecta o idioma do usuário e configura a tradução automática
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith('pt')) {
    // se o idioma do usuário for português
    var widget = new google.translate.TranslateElement(
      { pageLanguage: 'pt' },
      'google_translate_element'
    );
    widget.showBanner(false); // Oculta a barra de tradução do Google
    //   widget.showInfo(false); // Oculta o botão "mostrar mais" do Google
  }
}

