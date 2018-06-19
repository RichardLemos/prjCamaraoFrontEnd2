import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { SensorProvider } from '../../providers/sensor/sensor';

@IonicPage()
@Component({
  selector: 'page-medicoes',
  templateUrl: 'medicoes.html',
  providers: [
    SensorProvider
  ]
})
export class MedicoesPage {

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 1500);
  }

  public sensor: any;

  //alcalinidade
  @ViewChild('barCanvasAlc') barCanvasAlc;
  barChartAlc: any;
  aguaDoce: number;
  pAlcVez: boolean = true;

  //ph
  @ViewChild('barCanvasPh') barCanvasPh;
  barChartPh: any;
  neutra: number;
  pPhVez: boolean = true;

  //nivel
  @ViewChild('barCanvasNivel') barCanvasNivel;
  barChartNivel: any;
  superficie: number;
  meio: number;
  fundo: number;
  pNivelVez: boolean = true;

  //temperatura
  @ViewChild('barCanvasTemp') barCanvasTemp;
  barChartTemp: any;
  temperaturaIdeal: number;
  pTempVez: boolean = true;

  //salinidade
  @ViewChild('barCanvasSalini') barCanvasSalini;
  barChartSalini: any;
  salinidadeFundo: number;
  salinidadeSuperficie: number;
  pSaliniVez: boolean = true;

  //transparencia
  @ViewChild('barCanvasTranspa') barCanvasTranspa;
  barChartTranspa: any;
  transparencia: number;
  pTranspaVez: boolean = true;

  //amoniaTotal
  @ViewChild('barCanvasAmonia') barCanvasAmonia;
  barChartAmonia: any;
  amonia: number;
  pAmoniaVez: boolean = true;

  //dureza
  @ViewChild('barCanvasDureza') barCanvasDureza;
  barChartDureza: any;
  durezaTotalDoce: number;
  durezaTotalSalobra: number;
  pDurezaVez: boolean = true;

  //materiaOrganica
  @ViewChild('barCanvasMateriaOrganica') barCanvasMateriaOrganica;
  barChartMateriaOrganica: any;
  materiaOrganica: number;
  pMateriaOrganicaVez: boolean = true;

  //oxigenioDissolvido
  @ViewChild('barCanvasOxigenioDissolvido') barCanvasOxigenioDissolvido;
  barChartOxigenioDissolvido: any;
  oxigenioDissolvido: number;
  pOxigenioDissolvidoVez: boolean = true;

  //nitrito
  @ViewChild('barCanvasNitrito') barCanvasNitrito;
  barChartNitrito: any;
  nitritoDoce: number;
  nitritoSalobra: number;
  pNitritoVez: boolean = true;

  //nitrato
  @ViewChild('barCanvasNitrato') barCanvasNitrato;
  barChartNitrato: any;
  nitratoDoce: number;
  nitratoSalobra: number;
  pNitratoVez: boolean = true;

  //H2S
  @ViewChild('barCanvasH2s') barCanvasH2s;
  barChartH2s: any;
  h2s: number;
  pH2sVez: boolean = true;

  //Silicato
  @ViewChild('barCanvasSilicato') barCanvasSilicato;
  barChartSilicato: any;
  silicato: number;
  pSilicatoVez: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private sensorProvider: SensorProvider
  ) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.obterPropriedades()
  }
  obterPropriedades() {
    setTimeout(() => {

      this.sensorProvider.getLatestSensor().subscribe(
        data => {
          this.sensor = data as any;
          this.redenrizarChartAlc()
          this.redenrizarChartPh()
          this.redenrizarChartNivel()
          this.redenrizarChartTemp()
          this.redenrizarChartSalini()
          this.redenrizarChartTranspa()
          this.redenrizarChartAmonia()
          this.redenrizarChartDureza()
          this.redenrizarChartMateriaOrganica()
          this.redenrizarChartOxigenioDissolvido()
          this.redenrizarChartNitrito()
          this.redenrizarChartNitrato()
          this.redenrizarChartH2s()
          this.redenrizarChartSilicato()
          this.obterPropriedades()
          console.log(data);
        }, error => {
          console.log(error);
        }
      )
    }, 10000);
  }

  //alcalinidade
  redenrizarChartAlc() {

    this.aguaDoce = this.sensor.alcalinidadeDoce;
    this.barChartAlc = new Chart(this.barCanvasAlc.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Água Doce", "Água Salobra"],
        datasets: [{
          label: 'Neutralização',
          data: [this.aguaDoce],
          backgroundColor: [
            'rgba(2, 9, 132, 0.2)',
            'rgba(54, 162, 135, 0.2)',
            'rgba(25, 206, 86, 0.2)',
            'rgba(725, 92, 194, 0.2)',
            'rgba(53, 10, 25, 0.2)',
            'rgba(25, 15, 64, 0.2)'
          ],
          borderColor: [
            'rgba(205,99,132,1)',
            'rgba(54, 162, 135, 1)',
            'rgba(155, 06, 186, 1)',
            'rgba(015, 192, 102, 1)',
            'rgba(53, 102, 155, 1)',
            'rgba(255, 129, 64, 1)'
          ],
          borderWidth: 1
        }]
      },

      options: {

        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }

  //ph
  redenrizarChartPh() {

    this.neutra = this.sensor.ph;
    this.barChartPh = new Chart(this.barCanvasPh.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Ácida"],
        datasets: [{
          label: 'Potencial Hidrogeniônico',
          data: [this.neutra],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 56, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(253, 102, 255, 0.2)',
            'rgba(255, 159, 62, 0.2)'
          ],
          borderColor: [
            'rgba(255,199,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 02, 255, 1)',
            'rgba(255, 159, 44, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  //nivel
  redenrizarChartNivel() {

    this.meio = 4 + 1;
    this.fundo = 10 + 1;
    this.superficie = 1 + 1;
    this.barChartNivel = new Chart(this.barCanvasNivel.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Meio", "Fundo", "Superfície"],
        datasets: [{
          label: 'Profundidade',
          data: [this.meio, this.fundo, this.superficie,],
          backgroundColor: [
            'rgba(2, 9, 132, 0.2)',
            'rgba(54, 162, 135, 0.2)',
            'rgba(25, 206, 86, 0.2)',
            'rgba(725, 92, 194, 0.2)',
            'rgba(53, 10, 25, 0.2)',
            'rgba(25, 15, 64, 0.2)'
          ],
          borderColor: [
            'rgba(205,99,132,1)',
            'rgba(54, 162, 135, 1)',
            'rgba(155, 06, 186, 1)',
            'rgba(015, 192, 102, 1)',
            'rgba(53, 102, 155, 1)',
            'rgba(255, 129, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }

  //Temperatura
  redenrizarChartTemp() {

    this.temperaturaIdeal = this.sensor.temperatura;
    this.barChartTemp = new Chart(this.barCanvasTemp.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Temperatura Ideal"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.temperaturaIdeal],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //Salinidade
  redenrizarChartSalini() {

    this.salinidadeFundo = this.sensor.salinidadeFundo;
    this.salinidadeSuperficie = this.sensor.salinidadeSuperficie;
    this.barChartSalini = new Chart(this.barCanvasSalini.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Fundo", "Superfície"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.salinidadeFundo, this.salinidadeSuperficie],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //transparencia
  redenrizarChartTranspa() {

    this.transparencia = this.sensor.transparencia;
    this.barChartTranspa = new Chart(this.barCanvasTranspa.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Transparência"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.transparencia],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //amonia
  redenrizarChartAmonia() {

    this.amonia = this.sensor.amoniaTotal;
    this.barChartAmonia = new Chart(this.barCanvasAmonia.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Amônia Total"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.amonia],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //durezaTotalDoce e Salobra
  redenrizarChartDureza() {

    this.durezaTotalDoce = this.sensor.durezaTotalDoce;
    this.durezaTotalSalobra = this.sensor.durezaTotalSalobra;
    this.barChartDureza = new Chart(this.barCanvasDureza.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Dureza Doce", "Dureza Salobra"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.durezaTotalDoce, this.durezaTotalSalobra],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //materiaOrganica
  redenrizarChartMateriaOrganica() {

    this.materiaOrganica = this.sensor.materiaOrganica;
    this.barChartMateriaOrganica = new Chart(this.barCanvasMateriaOrganica.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Matéria Orgânica"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.materiaOrganica],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });


  }

  //materiaOrganica
  redenrizarChartOxigenioDissolvido() {

    this.oxigenioDissolvido = this.sensor.oxigenioDissolvido;
    this.barChartOxigenioDissolvido = new Chart(this.barCanvasOxigenioDissolvido.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Oxigênio Dissolvido"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.oxigenioDissolvido],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  //nitrito
  redenrizarChartNitrito() {

    this.nitritoDoce = this.sensor.nitritoDoce;
    this.nitritoSalobra = this.sensor.nitritoSalobra;
    this.barChartNitrito = new Chart(this.barCanvasNitrito.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Nitrito doce", "Nitrito salobra"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.nitritoDoce, this.nitritoSalobra],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  //nitrato
  redenrizarChartNitrato() {

    this.nitratoDoce = this.sensor.nitratoDoce;
    this.nitratoSalobra = this.sensor.nitratoSalobra;
    this.barChartNitrato = new Chart(this.barCanvasNitrato.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Nitrato doce", "Nitrato salobra"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.nitratoDoce, this.nitratoSalobra],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  //nitrato
  redenrizarChartH2s() {

    this.h2s = this.sensor.h2s;
    this.barChartH2s = new Chart(this.barCanvasH2s.nativeElement, {

      type: 'bar',
      data: {
        labels: ["H2S"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.h2s],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  //Silicato
  redenrizarChartSilicato() {

    this.silicato = this.sensor.silicato;
    this.barChartSilicato = new Chart(this.barCanvasSilicato.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Silicato"],
        datasets: [{
          label: 'Graus Celsius',
          data: [this.silicato],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }



}











//https://www.joshmorony.com/adding-responsive-charts-graphs-to-ionic-2-applications/
//https://www.djamware.com/post/598953f880aca768e4d2b12b/creating-beautiful-charts-easily-using-ionic-3-and-angular-4
