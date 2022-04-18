import React ,{Component} from 'react'
class hero extends Component
hero_name="alluarjun"
hero_image="https://images.hindustantimes.com/img/2022/02/04/550x309/Allu_Arjun_1643972725066_1643972746828.jpeg"

    render(){
        return (
            <div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <img src={this.hero_image} alt="#">
                </div>
                <div class="card-body">
                    <h1>{this.hero_name}</h1>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <img src={this.hero_image} alt="#">
                        </div>
                        <div class="card-body">
                            <h1>{this.hero_name}</h1>
                        </div>

                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <img src={this.hero_image} alt="#">
                                </div>
                                <div class="card-body">
                                    <h1>{this.hero_name}</h1>
                                </div>
                
            </div>
        </div>
    </div>
</div>

        )

    }

