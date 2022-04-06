<template>
    <footer>
        <h1 class="font-pacifico">Contáctanos</h1>
        <div class="grid">
            <div id="contacto" class="flex-col">
                <h3>Contacto</h3>
                <div class="flex-row">
                    <fa icon="phone" pull="left" fixed-width />
                    <p class= "float-right">554 172 5743</p>
                </div>
                <div class="flex-row">
                    <fa :icon="['fab','whatsapp']" pull="left" fixed-width/>
                    <p class= "float-right">222 222 2222</p>
                </div>
                <div class="flex-row">
                    <fa icon="envelope" pull="left" fixed-width />
                    <p class= "float-right">info@catcakes.com</p>
                </div>

            </div>
            <div id="ubicacion" class="flex-col">
                <h3>Ubicación</h3>

                <div class="flex-row">
                    <fa icon="location-dot" pull="left" fixed-width/>
                    <p class= "float-right">Calle Balderas #1127<br>
                            Centro Histórico<br>
                            CDMX
                    </p>
                </div>
            </div>
            <div id="horario" class="flex-col">
                <h3>Horario de atención</h3>
                <div class="flex-row">
                    <fa icon="calendar" pull="left" fixed-width/>
                    <p class= "float-right">Lunes a Sábado</p>
                </div>
                <div class="flex-row">
                    <fa icon="clock" pull="left" fixed-width/>
                    <p class= "float-right">10:00 - 19:00</p>
                </div>
            </div>
            <div id="privacidad" class="flex-col">
                <h3>Privacidad</h3>
                <p>Aviso de Privacidad</p>
                <p>Términos y condiciones</p>

            </div>
            <div id="redes" class="flex-col">
                <h3>Síguenos</h3>
                <div class="flex-row" id = "iconos">
                    <span><fa :icon="['fab','facebook-f']" size="2x"/></span>
                    <span><fa :icon="['fab','instagram']" size="2x"/></span>
                    <span><fa :icon="['fab','twitter']" size="2x"/></span>
                </div>
            </div>
            <!-- <div id="derechos" class="flex-col"></div> -->
        </div>
    </footer>
</template>
<script>
export default {
    name: 'ContactUs'
}
</script>

<style scoped>
    footer{
        padding: 3% 5%;
        background: rgb(137,224,224);
        border-top: 1px solid;
        /* background: linear-gradient(351deg, rgba(238,174,202,1) 0%, rgba(137,224,224,1) 75%); */

        }
    footer h3, footer h1{
        padding-bottom:1rem;
    }
    footer h3{
        font-family: 'Architects Daughter', cursive;
        font-size: 1.2rem;
    }
    footer h3, p{
        text-align: left;
    }
    p{
        display: block;
        padding-bottom:0.5rem;
    }
    .font-pacifico{
        color: aliceblue;
    }
    .float-left{
        float:left;
    }
    .float-right{
        float:right;
        padding-left:0.1rem;
    }
    .flex-col{
        display: flex;
        flex-direction: column;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
        padding-bottom: 0.5rem;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        /* grid-template-areas: ; */

    }
    #iconos span{
        padding: 0.4rem;
    }
    #iconos span:hover{
        transform:translateY(-0.4rem);
        transition: 0.3s;
    }
    
      @media (min-width: 576px) and (max-width: 992px){
        
        .grid{
            grid-template-columns: repeat(2, auto);
            padding-left:10%;
        }
    }
     @media (max-width: 576px){
        
        .grid{

            grid-template-columns: repeat(1, auto);
            /* text-align: center; */
        }
        h1{
            text-align: left;
        }
        footer{
            padding-left:15%;
        }

   } 
</style>