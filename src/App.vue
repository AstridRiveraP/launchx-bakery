<template>
    
  <router-view/>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Pacifico&display=swap');

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(239,24,127);

}
section{
  height: 100vh; 
  padding: 0 5% 5% 5%;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.font-architects{
  font-family: 'Architects Daughter', cursive;
}
.font-pacifico{
  font-family: 'Pacifico', cursive;
}
.section-title{
    height: 12%;
    display: block;
    font-size: 1.5rem;
}
    .card-container{
        display: grid;
        width:100%;
        box-sizing: border-box;
        padding: 0% 10%;
        gap: 2em;
    }
    .card{
        cursor: pointer;
        border-radius: 10px;
        height:100%;
     
    }
    .card img{
        object-fit: cover;
        max-height: 100%;
        width:100%;
        height: 70%;
        border-radius: 10px 10px 0 0;
        display: block;
    }

    .card-body{
        height: 30%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;

    }

    .card-body h5{
       font-family: 'Architects Daughter', cursive;
       font-size:1.3rem;

    }
    .card-body span{
        color:rgb(109,57,46) !important;
        font-size:1rem;


    }
    .card:hover{
        transform: scale(1.05);
        transition: cubic-bezier(0.55, 0.085, 0.68, 0.8);
    }
    
     @media (min-width: 576px) and (max-width: 992px){
        section{
          height:auto;
        }
        .card-container{
            grid-template-columns: repeat(2, auto);
        }
    }
  
    @media (max-width: 576px){
        section{
            height:auto;
        }
         .card-body h5{
            font-size:5vw;

        }
        .card-body span{
            font-size:5vw;

        }
       
   }
     

    
</style>
