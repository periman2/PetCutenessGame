var React = require('react');

var btnStyle = {
    height: '25px',
    width: '70px',
    marginTop: "10px",
    marginLeft: "5px",
    marginRight: "5px"
}

var compStyle = {
    display: 'inline-block',
    margineLeft: "auto",
    marginRight: "auto"
}

class PetComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likesCount: 0
        };
        this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
        this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);

    }
    handleLikeBtnClick(){
        console.log("before setstate");
        // console.log(this.props.petName + 'component like button clicked');
        this.setState(function(prevState){
            return {
                likedCount: prevState.likedCount + 1
            }
        })
        console.log("after setstate 1");

        this.setState(function(prevState){
            return {
                likedCount: prevState.likedCount + 1
            }
        })
        console.log("after setstate 2");
    }
    handleDislikeBtnClick(){
        // console.log(this.props.petName + 'Dog Component like button clicked');
        console.log("before setstate");
        this.setState({
            likesCount: this.state.likesCount - 1
        });
        console.log("after setstate");
    }
    render() {
        console.log("inside render")
        return (
            <div style={compStyle}>
                <h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
                <img style={{height: 400, width: 400}}src={this.props.imageURL} alt={"cute " + this.props.petName} />
                <br />
                <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
                <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
            </div>
        );
    }
}

module.exports = PetComponent;