import { GameService } from './services/game-service';
import { Pregunta } from './models/Question';
import { inject } from 'aurelia-framework';

@inject(GameService)
export class Game {
  initialMessage = "";
  isWelcomeVisible = true;
  isGameVisible = false;
  isResultVisible = false;
  questions : Pregunta[];
  currentQuestion = null;
  indexCurrentQuestion = 0;
  result = { category: "", explanation: "", points: 0};
  gameService: GameService;

    constructor() {
      this.gameService = new GameService();
      this.changeVisibility("Welcome");
      this.initialMessage = 'Bienvenido a Microbiología Test!' +
      'Para comenzar selecciona tu nivel de dificultad';
    }

    // getRecursos(){
    //   this.recursosService.getRecursos(this, function (objectApp) {
    //     objectApp.recursosTotalData = objectApp.dataList;
    //   });
    // }

  startGame(isLowLevel : boolean) {
    this.gameService.getPreguntas(this, function (objectApp) {
      objectApp.initGame(objectApp.dataList, isLowLevel);
    });
  }

  initGame(questions : Pregunta[], isLowLevel : boolean) {
    var questionsLevel = questions.filter(
      q => q.dificultad === "facil");
    
    this.questions =  this.gameService.getRandomQuestions(questionsLevel, 10);
    this.changeVisibility("Game");
    if (this.questions != null && this.questions.length != 0) {
      this.currentQuestion = this.questions[0];
      this.indexCurrentQuestion = 0;
    }
  }

  nextQuestion(selectedResponse: boolean) {
    this.indexCurrentQuestion++;
    if (selectedResponse == this.currentQuestion.respuestaCorrecta) {
      this.result.points++;
    }

    if (this.questions.length > this.indexCurrentQuestion) {
      this.currentQuestion = this.questions[this.indexCurrentQuestion];
    }
    else {
      this.changeVisibility("Result");
      this.fillResultText();
    }
  }

  changeVisibility(type) {
    switch (type) {
      case "Welcome":
        this.isWelcomeVisible = true;
        this.isGameVisible = false;
        this.isResultVisible = false;
        break;
      case "Game":
        this.isWelcomeVisible = false;
        this.isGameVisible = true;
        this.isResultVisible = false;
        break;
      case "Result":
        this.isResultVisible = true;
        this.isGameVisible = false;
        this.isWelcomeVisible = false;
        break;
    }
  }

  fillResultText() {
    var questionsCount = this.questions.length;

    if (this.result.points >= (questionsCount * 0.9)) {
      this.result.category = "Oro";
      this.result.explanation = "Has acertado " + this.result.points + ", medalla de oro, enhorabuena!";
    } else if (this.result.points >= (questionsCount * 0.7)) {
      this.result.category = "Plata";
      this.result.explanation = "Has acertado " + this.result.points + ", medalla de plata!";
    } else if (this.result.points >= (questionsCount * 0.5)) {
      this.result.category = "Bronce";
      this.result.explanation = "Has acertado " + this.result.points + ", medalla de bronce!";
    } else {
      this.result.category = "No ha habido suerte";
      this.result.explanation = "Prueba suerte la próxima vez!";
    }
  }

  playAgain(){
    this.changeVisibility("Welcome");
    }
  }