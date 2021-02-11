import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ContactosLista extends Component {

    state={
        contactos: []
    }

    componentDidMount(){
        this.mostrarNotas();

    }

    async mostrarNotas(){
        const res = await axios.get('http://localhost:4000/api/contactos');
        this.setState({contactos: res.data})
    }

    eliminarContacto = async (id) => {
        await axios.delete('http://localhost:4000/api/contactos/' + id)
        this.mostrarNotas();
    }

    

    render() {
        return (
            <div className="row animated fadeIn">
               {
                   this.state.contactos.map(contacto =>(
                       <div className="col-md-3 p-2" key={contacto._id}>
                           <div className="card">
                               <div className="card-body">
                                   <li className="list-group-item-action list-group-item active">{contacto.nombre}</li>
                                   <li className="list-group-item-action list-group-item">{contacto.apellidos}</li>
                                   <li className="list-group-item-action list-group-item">{contacto.telefono}</li>
                                   <li className="list-group-item-action list-group-item">{contacto.direccion}</li>   
                               </div>
                               <div className="card-footer d-flex justify-content-between" onClick={()=> this.eliminarContacto(contacto._id)}>
                                   <button className="btn btn-danger">
                                        Eliminar
                                   </button>

                                   <Link className="btn btn-secondary" to={"/editar/" + contacto._id}>
                                       Editar
                                   </Link>
                               </div>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}
