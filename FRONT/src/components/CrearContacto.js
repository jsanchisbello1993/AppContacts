import React, { Component } from 'react'
import axios from 'axios'

export default class CrearContacto extends Component {

    state={
        contactos: [],
        nombre:'',
        apellidos:'',
        telefono:'',
        direccion:'',
        editando: false,
        _id: ''

    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/contactos');
        this.setState({contactos: res.data});
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/contactos/' + this.props.match.params.id);
            console.log(res.data)
            
        }

    }

    onSubmit = async (e) =>{
        e.preventDefault();
        const nuevoContacto = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            telefono: this.state.telefono,
            direccion: this.state.direccion

        };
        if(this.state.editando){
            await axios.put('http://localhost:4000/api/contactos/' + this.state._id, nuevoContacto);
        } else{
            await axios.post('http://localhost:4000/api/contactos', nuevoContacto);
        }
        
        
        window.location.href = '/';
        
    }

    guardarDatos = e => {
        this.setState({[e.target.name]: e.target.value});
        // this.setState({contactoSelec: e.target.value});
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 animated fadeIn">
               <div className="card card-body m-4 animated fadeIn">
                   <h4>Crear Contacto</h4>
                   <form onSubmit={this.onSubmit}>

                       <div className="form-group">
                           <input type="text" 
                           className="form-control" 
                           placeholder="Nombre" 
                           name="nombre"
                           onChange={this.guardarDatos}
                           value={this.state.nombre} 
                           required/>
                       </div>

                       <div className="form-group">
                           <input type="text" 
                           className="form-control" 
                           placeholder="Apellidos" 
                           name="apellidos"
                           value={this.state.apellidos} 
                           onChange={this.guardarDatos}  
                           />
                       </div>
                       <div className="form-group">
                           <input type="number" 
                           className="form-control" 
                           placeholder="Numero Móvil" 
                           name="telefono"
                           onChange={this.guardarDatos}
                           value={this.state.telefono}  
                           required 
                           />
                       </div>

                       <div className="form-group">
                           <input type="text" 
                           className="form-control" 
                           placeholder="Dirección" 
                           name="direccion"
                           value={this.state.direccion} 
                           onChange={this.guardarDatos}  
                           />
                       </div>

                       <button type="submit" onSubmit={this.onSubmit}  className="btn btn-primary">
                            Guardar
                       </button>
                   </form>
               </div>
            </div>
        )
    }
}
