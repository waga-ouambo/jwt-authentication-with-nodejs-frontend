import React, {Component} from 'react';
import axios from 'axios';
import publicIp from "public-ip";
import Spinner from './Spinner/Spinner';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
// import $ from 'jquery'; 


 class Home extends Component{

    constructor(props){
        super(props);

        this.state={
            ipAdress: "",
            error: false,
            loading: false,
            errorMessage:'',
            posts:[], 
        }
    }

    getFingerPrint = async () => {
        // We recommend to call `load` at application startup.
    const fp = await FingerprintJS.load();

    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();

    // This is the visitor identifier:
    return result.visitorId; 
    // console.log(visitorId);
    }

    componentDidMount(){

        // $.ajax({
        //     url: "http://jsonplaceholder.typicode.com/posts",
        //     type: "GET",
        //     dataType: 'json',
        //     ContentType: 'application/json',
        //     success: function(data) {
        //         const posts = data.slice(0, 10);
        //         const updatedPosts = posts.map((post) => {
        //             return {
        //                 ...post,
        //                 name: 'Danny'
        //             }
        //         })

        //         console.table(updatedPosts);
        //       this.setState({data: data});
        //     }.bind(this),
        //     error: function(jqXHR) {
        //       console.log(jqXHR);
        //     }.bind(this)
        //  });
 
           

            console.log(navigator.userAgent);
            this.setState({loading: true});
            setTimeout(() => {
                this.ipAdress(); 
                this.loadPosts();
            }
            , 10000); 
        } 

        ipAdress = async () => {
            try {
                const ip = await publicIp.v4();
                        console.log(ip);
                        this.setState({ipAdress: ip});
            } catch (error) {
                console.log(error);
            }

        }

    loadPosts = async () => {
        this.setState({loading: true}); 
        const visitorId = await this.getFingerPrint();
        console.log('visitorId: ' + visitorId);
            const headers =   {
                    headers: {
                    'visitorId': visitorId 
                    }
                }

                try {
                  const response = await  axios.get('http://localhost:3000/api/post/list', headers)
                  console.log(response.data); 
                  this.setState({loading: false});
                  this.setState({posts: response.data.posts[0].description}); 
                } catch (error) {
                    console.log(error.message); 
                    this.setState({loading: false});
                    this.setState({errorMessage: error.message});
                    this.setState({error: true});
                }
                // setTimeout(() => axios.get('http://jsonplaceholder.typicode.com/posts')
                // setTimeout(() => axios.get('http://localhost:3000/api/post/list')
                // .then( (response) => { 
                //     console.log(response); 
                //     this.setState({loading: false});
                //     this.setState({posts: response.data.posts[0].description}); 
                   
                // })
                // .catch((error) => {
                //     console.log(error.response.data); 
                //     this.setState({loading: false});
                //     this.setState({errorMessage: error.response.data});
                //     this.setState({error: true}); 
                // }), 5000)
            
            
        }

     render(){

        let post =  <h1 style={{color: 'red', textAlign: 'center'}}> {this.state.errorMessage}</h1> 
        if(!this.state.error){
            post = <>
                <h1 style={{textAlign: 'center'}}> MY PUBLIC IP ADRESS IS : {this.state.ipAdress}</h1> 
                <h6>{this.state.posts}</h6>
            </> 
        }
        if(this.state.loading){
            post =  <Spinner></Spinner>
        }

        return(  
            <>
            <div className="col-12">
                {post}
            </div> 
            </> 
        ) }
 }
    

export default Home;