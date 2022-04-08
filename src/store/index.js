import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores : [
      
      {
        nombre:"Vainilla",
        precio: 230.00,
        cantidad: 10,
        image: require('@/assets/vainilla.jpg')
      },
     
      {
        nombre:"Chocolate",
        precio: 299.00,
        cantidad: 22,
        image: require('@/assets/chocolate.jpg')

      },
      {
        nombre:"Red Velvet",
        precio: 250.00,
        cantidad: 35,
        image: require('@/assets/redvelvet.jpg')

      },
      {
        nombre:"Moka",
        precio: 285.00,
        cantidad: 17,
        image: require('@/assets/moka.jpg')

      },
      {
        nombre:"Zanahoria",
        precio: 245.00,
        cantidad: 4,
        image: require('@/assets/zanahoria.jpg')

      },
      {
        nombre:"Queso con fresas",
        precio: 275.00,
        cantidad: 12,
        image: require('@/assets/quesofresas.jpg')

      }

    ],

    decoraciones:[
      {
        nombre: "Velas",
        precio: 25.50,
        image: require('@/assets/candlessmall.jpg'),
        cantidad: 5
      },
      {
        nombre: "Vela Personalizada",
        precio: 32.70,
        image: require('@/assets/candlesbig.jpg'),
        cantidad: 23
      },
      {
        nombre: "Mensaje",
        precio: 28.00,
        image: require('@/assets/message.jpg'),
        cantidad: 31
      },
      {
        nombre: "Globos",
        precio: 99.99,
        image: require('@/assets/balloons.jpg'),
        cantidad: 62
      }
    ],

    pedidoActual:{
      capas: 0,
      sabores: [],
      precioSabor: 0.0,
      decoraciones : [0,0,0,0,0,0],
      precios : [0.0,0.0,0.0,0.0,0.0,0.0],
      total:0.0,
      cliente:{
        nombre:"",
        email:"",
        tel:""
      }
    },

    pedidos:[]
      

  },
  getters: {
    getAllFlavors:(state)=> state.sabores,
    getAllDecorations:(state)=>state.decoraciones,
    getCapas:(state) => state.pedidoActual.capas,
    getFlavors:(state) =>state.pedidoActual.sabores,
    getDeco:(state) => state.pedidoActual.decoraciones,
    getPrices: (state) => state.pedidoActual.precios,
    getCakePrice: (state) => state.pedidoActual.precioSabor,
    getTotal: (state) => state.pedidoActual.total,
    getAllPedidos: (state) => state.pedidos,
  },
  mutations: {
    calculatePrices(state){
      for (let index = 0; index < state.decoraciones.length; index++) {
        state.pedidoActual.precios[index] = state.decoraciones[index].precio * state.pedidoActual.decoraciones[index];
      }
    },
    
    cantidadPanes(state, cantidad){
      state.pedidoActual.capas = cantidad;
      // console.log(state.pedidoActual.capas);
    },
    selectFlavors(state, flavor){
      state.pedidoActual.sabores.push(flavor);
      // console.log(state.pedidoActual.sabores);
    },
    removeFlavor(state, flavor){
      state.pedidoActual.sabores = state.pedidoActual.sabores.filter(item => item !== flavor)
    },
    selectDecorations(state, deco, quantity){
      state.pedidoActual.decoraciones.push(
        { decoracion: deco, 
          cantidad: quantity}
      );
    },
    increment(state, index){
      state.pedidoActual.decoraciones[index]+=1;
    },
    decrement(state, index){
      state.pedidoActual.decoraciones[index]-=1;
    },
    
    agregarPrecioSabor(state, saborNombre){
      const sabor = state.sabores.find(obj => {
          return obj.nombre === saborNombre})
      state.pedidoActual.precioSabor += sabor.precio/state.pedidoActual.capas;
    },
    quitarPrecioSabor(state, saborNombre){
      const sabor = state.sabores.find(obj => {
        return obj.nombre === saborNombre})
      state.pedidoActual.precioSabor -= sabor.precio/state.pedidoActual.capas;
    },
    calcularTotal(state){
      console.log(state.pedidoActual.precioSabor,state.pedidoActual.precios);
      state.pedidoActual.total = state.pedidoActual.precioSabor+state.pedidoActual.precios.reduce((a,b) => a+b,0.0)
    },
    updateClientName(state, name){
      state.pedidoActual.cliente.nombre = name;
    },
    updateClientTel(state, tel){
      state.pedidoActual.cliente.tel = tel;
    },
    updateClientEmail(state, email){
      state.pedidoActual.cliente.email = email;
    },
    agregarPedido(state){
      state.pedidos.push(state.pedidoActual);
      state.pedidoActual = {
        capas: 0,
        sabores: [],
        precioSabor: 0.0,
        decoraciones : [0,0,0,0,0,0],
        precios : [0.0,0.0,0.0,0.0,0.0,0.0],
        total:0.0,
        // decoracion :{nombre y cantidad}
        cliente:{
          nombre:"",
          email:"",
          tel:""
        }

      }
    },

  },
  actions: {
    async cambiarCantidad({commit}, cantidad){
      commit("cantidadPanes",cantidad);
    },
    async updateSelectedFlavors({commit}, target){
      if (target.checked){
        commit("selectFlavors", target.value);
        commit("agregarPrecioSabor", target.value);
        commit("calcularTotal");
      }
      else{
        commit("removeFlavor", target.value);
        commit("quitarPrecioSabor", target.value);
        commit("calcularTotal");
      } 
    },
    async upQuantity({commit, state},index){
      if(state.pedidoActual.decoraciones[index]< state.decoraciones[index].cantidad)
        commit("increment",index);
        commit("calculatePrices");
        commit("calcularTotal");

    },
    async downQuantity({commit, state},index){
      if (state.pedidoActual.decoraciones[index]>0){
        commit("decrement",index);
        commit("calculatePrices");
        commit("calcularTotal");

      }      
    },
    async crearPedido({commit}){
      commit("agregarPedido");
    }
    

  },
  modules: {
  }
})
// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     contador:0
//   },
//   getters: {
//     square(state){
//       return state.contador * state.contador;
//     }
//   },
//   mutations: {
//     subirContador(state, random){
//       state.contador+= random;
//     },
//     bajarContador(state, random){
//       state.contador-=random;
//     }
//   },
//   actions: {
//     async subirContador({commit}){
//       const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new');
//       const results = await res.json();
//       console.log(results);
//       commit("subirContador", results);
//     },
//     async bajarContador({commit}){
//       const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new');
//       const results = await res.json();
//       console.log(results);
//       commit("bajarContador", results);
//     }
//   },
//   modules: {
//   }
// })

