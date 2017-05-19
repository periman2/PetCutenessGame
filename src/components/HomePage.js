var React = require("react");
var PetComponent = require('./PetComponent');

var style = {
    textAlign: "center",
    fontSize: "2em",
    color: "blue"
};

var btnStyle = {
    marginTop: "30px",
    marginRight: "5px",
    height: "25px"
}

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.catComInstRef = null;
        this.dogComInstRef = null;
        this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
        this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
    }
    handleShowWinnerBtnClick(){
        console.log(this.catComInstRef);
        console.log(this.dogComInstRef);

        var catLikesCount = this.catComInstRef.state.likesCount;
        var dogLikesCount = this.dogComInstRef.state.likesCount;
        if(catLikesCount > dogLikesCount){
            console.log('cat is the winner');
        } else if (catLikesCount < dogLikesCount){
            console.log("dog is the winner")
        } else {
            console.log("Game is a tie");
        }
    }
    handleStartOverBtnClick() {

    }
    render() {
        return (
            <div>
                <h1 style={style}>
                    Weclome to Cat and Dog Cuteness Fight Game!!!
                </h1>
                <div style={{marginTop: 60, textAlign: 'center'}}>
                    <PetComponent 
                    petName="Cat" 
                    ref={function(compInst) {this.catComInstRef = compInst}}
                    imageURL="http://www.cutestpaw.com/wp-content/uploads/2011/11/Henke.jpg" 
                    />
                    <PetComponent 
                    petName="Dog" 
                    ref={function(compInst) {this.dogComInstRef = compInst}}
                    imageURL='https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg' 
                    />
                </div>
                <div style={{textAlign: "center"}}>
                    <button style={{btnStyle}} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
                    <button style={{btnStyle}} onClick={this.handleStartOverBtnClick}>Start Over</button>
                </div>
            </div>
        );
    }
}



module.exports = HomePage;

