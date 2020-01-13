import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomeThreeColumns extends Component {
    render() {
        return (
            <div className='three-columns'>
                <div className='first-column'>
                    <p>
                        10<br/>
                    </p>
                    <p>
                        ODDANYCH WORKÓW<br/>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc<br/>Pallentesque cel enim a elit viverra elementuma.<br/>Aliquam erat volutpat.
                    </p>
                </div>
                <div className='second-column'>
                    <p>
                        5<br/>
                    </p>
                    <p>
                        WSPARTYCH ORGANIZACJI<br/>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc<br/>Pallentesque cel enim a elit viverra elementuma.<br/>Aliquam erat volutpat.
                    </p>
                </div>
                <div className='third-column'>
                    <p>
                        7<br/>
                    </p>
                    <p>
                        ZORGANIZOWANYCH ZBIÓREK<br/>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc<br/>Pallentesque cel enim a elit viverra elementuma.<br/>Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;