import React, { Component }from 'react';
import { Link } from 'react-scroll'
import './Home.css'


let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap-delete">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };

export class Home extends Component {
    render() {
            return(
            <div className='max-width home'>
                <div className='container-home'>
                    <div className='text-1'>
                        Hello, my name is
                    </div>
                    <div className='text-2'>
                        Mateo Mazzucco
                    </div>
                    <div className='text-3'>
                        <h1>
                            <p>And i'm a&nbsp;</p>
                            <a href="#" class="typewrite" data-period="3000" data-type='[ "Developer.", "Front end.", "Junior."]'>
                                <span class="wrap-delete"></span>
                            </a>
                        </h1>
                    </div>
                    <div className='btn container-button'>
                        <Link to='about' className='here-button' smooth={true} duration={1000}>Learn more</Link>
                    </div>
                    </div>
            </div>
        );
    };
}

export default Home;
