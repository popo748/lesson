<template>
    <v-app>
      <v-app-bar class="px-3 text-center">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          <v-icon>mdi-car-cog</v-icon>
          ABX Workshop
        </v-app-bar-title> 
        
        <v-btn icon >
          <v-icon>mdi mdi-web</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
          <v-row >
            <v-col cols="12">
              <v-carousel >
                <v-carousel-item
                  src="./assets/carousel-1.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="./assets/carousel-2.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="./assets/carousel-3.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="./assets/carousel-4.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="./assets/carousel-5.jpg"
                  cover
                ></v-carousel-item>
            </v-carousel>
            </v-col>
          </v-row>
       
          <v-row>
            <v-col cols=12>
              <v-tabs
                class="bg-grey-lighten-2 opacity-90"
                slider-color="grey-darken-3"
                v-model="tab"
                align-tabs="center"              
                >
                <v-tab :value="1"><h2 class="mx-5">Home</h2></v-tab>
                <v-tab :value="2"><h2 class="mx-5">Get a Quote</h2></v-tab>
                <v-tab :value="2"><h2 class="mx-5">Booking</h2></v-tab>
                <v-tab :value="2"><h2 class="mx-5">Blog</h2></v-tab>
                <v-tab :value="3"><h2 class="mx-5">Contact</h2></v-tab>
              </v-tabs>
            </v-col>
          </v-row>         

          <v-row class="text-center">
            <v-col cols=12>
              <h1>Your One Stop Auto Service Center</h1>
              <h4>Automotive services and maintenance 
                that keeps your vehicle driving</h4>
            </v-col>            
          </v-row>

         <br><br>

          <v-row class="mx-3">
            <v-col cols="4">
              <v-img
                  width="600"
                  height="400"
                  src="./assets/page-img-1.jpg"
                  cover>
              </v-img>
            </v-col>

            <v-col cols="8">
              <p class="text-justify text-h6">
                ABX Workshop is located at Taman Equine (Seri Kembangan) Selangor, 
                we provide an extensive range of workshop services and repairs.
                We offered professional repair services from the car engine, oil change, 
                brake services, clutches service, tire repairs, battery services, engine overhaul, 
                diagnostic, and tuning available. Consistent servicing is an important factor 
                in keeping your car performing efficiently and safely.
              </p>
              <br>
              <p class="text-justify text-h6">
                At ABX workshop, we documented your car services history and records. 
                We are able to advise customers on the standard routine car services as well as customized 
                services & maintenance based on customers' driving behavior & driving mileages.
              </p>

              <br>
              <p class="text-justify text-h6">
                Our experienced service crew will advise and provide the best solutions based 
                on detailed examines.
              </p>
            </v-col>
          </v-row>

          <v-row class="mb-3 mx-3">
            <v-col cols="3">
              <v-card                
                height="500"
                >
                <v-img
                  width="500"
                  height="300"
                  src="./assets/page-img-2.jpg"
                  cover>
                </v-img>

                <v-card-title class="text-center font-weight-bold">
                  CAR SERVICES
                </v-card-title>

                <v-card-text class="text-center">
                  We are capable to offer a wide range of professional 
                  and well maintained automotive repair services to your car, 
                  lorry, van or SUV. Besides, we also provide outdoor service 
                  from within Sri Kembangan to Putrajaya and Cyberjaya. 
                  Feel free to call us for inquiry!
                </v-card-text>         
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card
                height="500">
                <v-img
                  width="500"
                  height="300"
                  src="./assets/page-img-3.jpg"
                  cover>
                </v-img>

                <v-card-title class="text-center font-weight-bold">
                  CAR BATTERY
                </v-card-title>

                <v-card-text class="text-center">
                  If your car, sedan, suv, van or lorry 
                  encounter a battery breakdown 
                  or failed to start and you are stuck 
                  in the middle of somewhere, no worries!
                </v-card-text>         
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card
                height="500">
                <v-img
                  width="500"
                  height="300"
                  src="./assets/page-img-4.jpg"
                  cover>
                </v-img>

                <v-card-title class="text-center font-weight-bold">
                  ROAD SIDE ASSISTANCE
                </v-card-title>

                <v-card-text class="text-center">
                  ABX Workshop will be able to assist you by sending 
                  our car mechanic for car checking and minor outdoor 
                  services. Common mechanical problems are car battery breakdown, 
                  flat tires, sensors disconnected and vehicle parts malfunction. 
                </v-card-text>         
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card
                height="500">
                <v-img
                  width="500"
                  height="300"
                  src="./assets/page-img-5.jpg"
                  cover>
                </v-img>

                <v-card-title class="text-center font-weight-bold">
                  EMERGENCY
                </v-card-title>

                <v-card-text class="text-center">
                  ABX Workshop will help you in repairing, delivering 
                  and installation of battery or replacing faulty parts. 
                  Charges include outdoor service, labor charges and parts.
                </v-card-text>         
              </v-card>
            </v-col>
          </v-row>

          <v-row class="text-center">
            <v-col cols=12>
              <h2>4 Simple Steps To Service Your Car</h2>
            </v-col>            
          </v-row>

          <v-row>
            <v-col cols=12>
              <v-timeline side="end">
                <v-timeline-item size="small" width="700">  
                  <v-alert color="blue">
                    <strong>Step 1:</strong>Select a service.
                  </v-alert>                  
                </v-timeline-item>

                <v-timeline-item size="small" width="700">  
                  <v-alert color="blue">
                    <strong>Step 2:</strong>Schedule your service or walk-in
                  </v-alert>                  
                </v-timeline-item>

                <v-timeline-item size="small" width="700">  
                  <v-alert color="blue">
                    <strong>Step 3:</strong>Track the status of your service 
                    and recieve updates on proposed work and repairs carried out
                  </v-alert>                  
                </v-timeline-item>

                <v-timeline-item size="small" width="700">  
                  <v-alert color="blue">
                    <strong>Step 4:</strong>Make payment and collect your car
                  </v-alert>                  
                </v-timeline-item>

              </v-timeline>
            </v-col>            
          </v-row>

      </v-main>

      <v-footer height="60" class="bg-blue-grey-darken-4" app>
          <div class="mx-auto">
            {{ new Date().getFullYear() }} — <strong>ABX Workshop</strong>
          </div>

          <div class="d-flex flex-row-reverse">
            <v-btn icon>
              <v-icon size="25">mdi mdi-youtube</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon size="25">mdi mdi-instagram</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon size="25">mdi mdi-facebook</v-icon>
            </v-btn>
          </div>
      </v-footer>
      
    </v-app>
  
</template>

<script setup>

</script>
