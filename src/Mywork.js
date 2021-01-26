import React,{Component} from 'react';
import './style.css';
import Tube from './Tube';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:'rgba(138,121,173)',
      color:'white'
    }
};

class Mywork extends Component{
    state={
        cat:'all',
        modalIsOpen:false,
        id:''
    }

    openModal=()=> {
        this.setState({modalIsOpen:true});
    }
    afterOpenModal=()=>{
    }
    
    closeModal=()=>{
        this.setState({modalIsOpen:false});
    }

    render(){
        return(
            <div className="mywork" id="mywork">
                <div className="title">My work</div>
                <div className = "subtitle"> Projects</div>
                <div className="btns">
                    <button className="one" onClick={()=>{this.setState({cat:'all'});}}>All</button>
                    <button className="two" onClick={()=>{this.setState({cat:'two'});}}>Front-end</button>
                    <button className="thr" onClick={()=>{this.setState({cat:'thr'});}}>Back-end</button>
                    <button className="fou" onClick={()=>{this.setState({cat:'fou'});}}>Game</button>
                </div>
                <span className="displays">
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); this.setState({id:'a9zj9XuzKF8'})}}>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); this.setState({id:'vZ7TW-E5Xi4'})}}>b</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button>c</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                </span>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}>
                <Tube videoId={this.state.id}/>
            </Modal>
            </div>
        )
    }
}

export default Mywork;