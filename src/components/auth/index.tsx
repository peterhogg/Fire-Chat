import React, {Component, FormEvent} from 'react';
import SignIn from "../signin";
import firebase from 'firebase';
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button} from '@material-ui/core';
interface IProps{
	
}

interface IState{
	open: boolean,
	title: string,
	message: string,
	user: any,
}

class Auth extends Component<IProps, IState>{
	constructor(props: any){
		super(props);

		this.signIn = this.signIn.bind(this);
		this.register = this.register.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			open: false,
			title: "",
			message: "",
			user: undefined,
		};
	}

	async componentDidMount(){
		try{
			const user = await firebase.auth().currentUser;
			if(user){
				this.setState({
					user,
				})
			}
		}
		catch(e){
		}
	}
	

	async signIn (event: React.FormEvent, email: string, password: string){
		event.preventDefault();
		try{
			const res = await firebase.auth().signInWithEmailAndPassword(email, password);
			this.setState({
				user: res.user
			});
		}
		catch(e){
			console.error(e);
			this.setState({
				open: true,
				title: "Sign-in Error",
				message: e.message,
			});
		}
	}

	async register(event: React.FormEvent, email: string, password: string){
		event.preventDefault();
		try{
			const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
			this.setState({
				user: res.user,
			});
		}
		catch(e){
			this.setState({
				open: true,
				title: "Registration Error",
				message: e.message,
			})
		}
	}

	handleClose(){
		this.setState({open: false})
	}

	renderChildren(props: any) {
		return React.Children.map(props.children, child => {
			return React.cloneElement(child, {
			  user: props.user
			})
		});
	  }

	render() {
		const {open, title, message, user} = this.state;
		const {children} = this.props;
		const childrenWithProps = React.Children.map(children, (child: any) =>
			React.cloneElement(child, { user })
		  );
		
		return (
		<div>	
		{user?
			<div>
			  {childrenWithProps}
			</div>
		:<div>
		<SignIn signIn={this.signIn} register={this.register}/>
		<Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
		</div>
		}
		</div>
		)		
	}
}

export default Auth;

