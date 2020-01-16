import React, { Component } from 'react';

class Fundacja extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: [],
            fundacjaContent: ['dbam-o-zdrowie', 'dla-dzieci', 'bez-domu', 'dbam-o-zdrowie-2', 'dla-dzieci-2', 'bez-domu-2', 'dbam-o-zdrowie-3', 'dla-dzieci-3', 'bez-domu-3'],
            organizacjaContent: ['lorem-1-1', 'lorem-1-1', 'lorem-1-1', 'lorem-1-2', 'lorem-2-2', 'lorem-3-2'],
            zbiorkaContent: ['zbiorka-1', 'zbiorka-2', 'zbiorka-3'],
            activePage: 1,
            itemsPerPage: 3,
            actual: "fundacjaContent"
        };
    }

    get current() {
        const { actual } = this.state;
        return this.state[actual]
    }

    handleOnClickContent = (e) => {
        this.setState({ actual: e.target.name, activePage: 1 })
    }


    handleOnClick = (event) => {
        this.setState({ activePage: Number(event.target.id)});
    }

    // componentDidMount() {
    //     fetch('http://localhost:3001/pagecontent')
    //         .then(res => res.json())
    //         .then(pageContent => this.setState({ pageContent }))
    // }

    render() {
        const { activePage, itemsPerPage } = this.state;
    
        const LastPage = activePage * itemsPerPage;
        const FirstPage = LastPage - itemsPerPage;
        const currentContent = this.current.slice(FirstPage, LastPage);
        const renderContent = currentContent.map((content, index) => {
            return <li key={index}>{content}</li>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.current.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        
        const renderPageNumbers = pageNumbers.length > 1 && pageNumbers.map(number => (
                <li key={number} id={number} onClick={this.handleOnClick}> {number} </li>
            )
        );
        
        return (
            <div id='fundacja-i-organizacje'>
                <div className='fundacja-header'>Komu pomagamy?</div>
                <div className='decoration-image'></div>

                <div className='fundacja-i-organizacje-buttons'>
                    <button name="fundacjaContent" onClick={this.handleOnClickContent} className='main-button-fundacje'>Fundacjom</button>
                    <button name="organizacjaContent" onClick={this.handleOnClickContent} className='main-button-organizacje'>Organizacjom pozarządowym</button>
                    <button name="zbiorkaContent" onClick={this.handleOnClickContent} className='main-button-lokalne-organizacje'>Lokalnym zbiórkom</button>
                </div>
                <p className='fundacja-text'>W naszej bazie znajdzieszz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym sie zajmują, 
                    komu pomagają i czego potrzebują.</p>

                <div className='fundacja-i-organizacje-content'>
                    <ul> {renderContent} </ul>
                    <ul> {renderPageNumbers} </ul>
                </div>
            
            </div>
        );
    }
}


    // fundacjom = () => {
    //     this.setState({ content: <FundacjaSub1 /> });
    // }

    // organizacjom = () => {
    //     this.setState({ content: <FundacjaSub2 /> });
    // }

    // lokalnym = () => {
    //     this.setState({ content: <FundacjaSub3 /> });
    // }
    
//     render() {
//         const = {}
//         return (
//             <div id='fundacja-i-organizacje'>
//                 <div className='fundacja-header'>Komu pomagamy?</div>
//                 <div className='decoration-image'></div>

//             <div className='fundacja-i-organizacje-buttons'>
//                 <button onClick={this.fundacjom} className='main-button-fundacje'>Fundacjom</button>
//                 <button onClick={this.organizacjom} className='main-button-organizacje'>Organizacjom pozarządowym</button>
//                 <button onClick={this.lokalnym} className='main-button-lokalne-organizacje'>Lokalnym zbiórkom</button>
//             </div>
//             <p className='fundacja-text'>W naszej bazie znajdzieszz listę zweryfikowanych Fundacji, 
//                 z którymi współpracujemy. Możesz sprawdzić czym sie zajmują, 
//                 komu pomagają i czego potrzebują.</p>

//             <div className='fundacja-i-organizacje-content'>{this.state.content}</div>
//             </div>
//         );
//     }
// }

export default Fundacja;