import React, { Component } from 'react'

class Body extends Component {
    render() {
        return (
            <div className="container">
                <h5 className="text-center text-dark">TOP CITIES</h5>
          <div className="card-columns">
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Abuja</h5>
                <p className="card-text">Find top hotel picks in Abuja city</p>
              </div>
            </div>
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Port-Harcourt</h5>
                <p className="card-text">Find top hotel picks in PortHarcourt city</p>
              </div>
            </div>
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Akwa-Ibom</h5>
                <p className="card-text">Find top hotel picks in Akwa-Ibom city</p>
              </div>
            </div>
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Lagos</h5>
                <p className="card-text">Find top hotel picks in Lagos city</p>
              </div>
            </div>
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Anambra</h5>
                <p className="card-text">Find top hotel picks in Anambra city</p>
              </div>
            </div>
            <div className="card border-primary text-center">
              <div className="card-body text-primary">
                <h5 className="card-title">Enugu</h5>
                <p className="card-text">Find top hotel picks in Enugu city</p>
              </div>
            </div>
            </div>
          </div>
        );
    }
}

export default Body
