describe("", function() {
  it('Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"', function () {
      var languages = languagesArrayCreation();
      expect(languages).toEqual(["Html","CSS","Java","PHP"]);
  });
  it('Créer un tableau "numbers" contenant les numbers de 0 à 5', function () {
      var numbers = numbersArrayCreation();
      expect(numbers).toEqual([0,1,2,3,4,5]);
  });
  it('Remplacer le troisième élément du tableau par "Javascript"', function () {
      var languages = ["Html","CSS","Java","PHP"];
      var languages = ElementReplacement(languages);
      expect(languages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);
  });
  it('Ajouter "Ruby" et "Python" à la fin du tableau', function () {
      var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
      var languages = AddElementToLanguagesArray(languages);
      expect(languages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Ajouter "-2" et "-1" au début du tableau numbers', function () {
      var numbers = [0,1,2,3,4,5];
      var numbers = AddElementToNumbersArray(numbers);
      expect(numbers).toEqual([-2,-1,0,1,2,3,4,5]);
  });
  it('Supprimer le premier élément du tableau languages', function () {
      var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var languages = deleteArrayFirstElement(languages);
      expect(languages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Supprimer le dernier élément du tableau languages', function () {
      var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var languages = deleteArrayLastElement(languages);
      expect(languages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
  });
  it('Faire de la chaîne "socialMediaInString" un tableau "socialMedia"', function () {
      var socialMediaInString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
      var socialMedia = stringToArray(socialMediaInString);
      expect(socialMedia).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);
  });
  it('Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule', function () {
      var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
      var languagesInString = arrayToString(languages);
      expect(languagesInString).toEqual("CSS,Javascript,PHP,Ruby");
  });
  it('Trier le tableau "socialMedia"', function () {
      var socialMedia = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
      var socialMedia = arraySort(socialMedia);
      expect(socialMedia).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);
  });
  it('Bonus : Inverser le tableau "languages"', function () {
      var languages = ['CSS','Javascript','PHP','Ruby'];
      var languages = arrayInvert(languages);
      expect(languages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);
  });
});
