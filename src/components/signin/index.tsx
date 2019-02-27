import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import './signin.scss';

interface IProps {
	signIn: Function,
	register: Function,
}

interface IState {
	email: string,
	password: string,
}

class SignIn extends Component<IProps, IState> {
    constructor(props: any) {
		super(props);
		this.state = ({email: "", password: ""})
		this.emailChange = this.emailChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
	}
	emailChange(event: any) {
		this.setState({email: event.target.value});
	}
	passwordChange(event: any) {
		this.setState({password: event.target.value});
	}
    render() {
		const {signIn,register} = this.props;
		const {email, password} = this.state;
        return (
			<div className="background">
				<Card className="card {classes.card}">
					
						<CardContent>
							<h1>Fire Chat</h1>
							<h2>Sign In</h2>
							<form onSubmit={(e) => signIn(e, email, password)}>
							<Input type="text" name="email" placeholder="Email" value={email} onChange={this.emailChange}/>
							<Input type="password" name="password" placeholder="Password" value={password} onChange={this.passwordChange}/>
							<Button type="submit">Sign In</Button>
							<Button onClick = {(e) => register(e, email, password)}>Register</Button>
							</form>
						</CardContent>
						<CardActions>
							
						</CardActions>
					
				</Card>
			</div>
        );
    }
}

export default SignIn;
