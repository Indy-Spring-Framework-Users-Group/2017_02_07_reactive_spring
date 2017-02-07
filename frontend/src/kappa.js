import React from 'react';
import kappaImg from './kappa.png';

const Kappa = React.createClass({

    getInitialState() {
        return {
            kappa : {},
            activeImgWidth: "500px"
        }
    },
    componentWillMount() {
        this.getKappa();
    },
    getKappa() {

        if (!!window.EventSource) {
            var source = new EventSource('http://localhost:8080/kappa');
        } else {
        // Result to xhr polling :(
        }

        source.addEventListener('message', ((e) => {
            console.log(e.data);
            if(e.data) {
                var newWidth = this.state.activeImgWidth;
                if(e.data < .9 && e.data > .7) {
                    newWidth = "300px";
                }
                else if(e.data < .6 && e.data > .5) {
                    newWidth = "400px";
                }
                else if(e.data < .5 && e.data > .3) {
                    newWidth = "600px";
                }
                else if(e.data < .3 && e.data > .2) {
                    newWidth = "800px";
                }
                else if(e.data < .2 && e.data > .1) {
                    newWidth = "200px";
                }
                else {
                    newWidth = "500px";
                }
                this.setState({
                kappa: e.data,
                activeImgWidth: newWidth
                })
            }

        }), false);
    },

    render() {
        return (
            <div>
                <img src={kappaImg} className="Kappa" style={{width: this.state.activeImgWidth}}/>
            </div>
        );
    }
});

export default Kappa;
