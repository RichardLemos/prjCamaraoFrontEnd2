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
  fraca: number;
  //media: number;
  //forte: number;
  pAlcVez: boolean = true;

  //ph
  @ViewChild('barCanvasPh') barCanvasPh;
  barChartPh: any;
  acida: number;
  neutra: number;
  alcalina: number;
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
  temperaturaAmbiente: number;
  temperaturaMedia: number;
  temperaturaAlta: number;
  pTempVez: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController,
    private sensorProvider: SensorProvider
    ) {
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.obterProprieadades()
  }
  obterProprieadades(){
    setTimeout(() => {
      
      this.sensorProvider.getLatestSensor().subscribe(
        data => {
          this.sensor = data as any;
          this.redenrizarChartAlc()
          this.redenrizarChartPh()
          this.redenrizarChartNivel()
          this.redenrizarChartTemp()
         this.obterProprieadades()
          console.log(data);
        }, error => {
          console.log(error);
        }
      )
    }, 10000);
  }

  //alcalinidade
  redenrizarChartAlc() {

      this.fraca = this.sensor.alcalinidadeDoce;
    //  this.media = 4 + 1;
      //this.forte = 10 + 1;
      this.barChartAlc = new Chart(this.barCanvasAlc.nativeElement, {

        type: 'bar',
        data: {
          labels: ["Fraca", "Média", "Forte"],
          datasets: [{
            label: 'Neutralização',
            data: [this.fraca], // this.media, this.forte
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

      this.acida = 1 + 1;
      this.neutra = 4 + 1;
      this.alcalina = 10 + 1;
      this.barChartPh = new Chart(this.barCanvasPh.nativeElement, {

        type: 'bar',
        data: {
          labels: ["Ácida", "Neutra", "Alcalina"],
          datasets: [{
            label: 'Potencial Hidrogeniônico',
            data: [this.acida, this.neutra, this.alcalina],
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

      this.superficie = 1 + 1;
      this.meio = 4 + 1;
      this.fundo = 10 + 1;
      this.barChartNivel = new Chart(this.barCanvasNivel.nativeElement, {

        type: 'bar',
        data: {
          labels: ["Superfície", "Meio", "Fundo"],
          datasets: [{
            label: 'Profundidade',
            data: [this.superficie, this.meio, this.fundo],
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

      this.temperaturaAmbiente = 1 + 1;
      this.temperaturaMedia = 4 + 1;
      this.temperaturaAlta = 10 + 1;
      this.barChartTemp = new Chart(this.barCanvasTemp.nativeElement, {

        type: 'bar',
        data: {
          labels: ["Ambiente", "Média", "Alta"],
          datasets: [{
            label: 'Graus Celsius',
            data: [this.temperaturaAmbiente, this.temperaturaMedia, this.temperaturaAlta],
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
