export const Signup = async (username, password) => {
    const payload = {username, password}
    console.log("Logging in with:", {payload});

    try {
      const response = await fetch('http://localhost:8000/auth/login',
        {
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Response data:', data);
        return data
        //props.setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

    } catch (error) {
      console.error('Error:', error);
    }
}

export const Login = async (username, email, password) => {

    const payload = {username, email, password}
    console.log("Signing up with:", {payload});

    try {
        const response = await fetch('http://localhost:8000/auth/signup',
        {
            method : 'POST',
            headers : {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getAccount = async (id) => {

    // console.log("Signing up with:", {payload});

    try {
        const response = await fetch('http://localhost:8000/account/'+id,
        {
            method : 'GET',
            headers : {
            'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Response data:', data);
        return data
        
    } catch (error) {
        console.error('Error:', error);
    }
}

export const depositFunds = async (id, ammount) => {

    const payload = {ammount}
    console.log("Deposit :", {payload});

    try {
        const response = await fetch('http://localhost:8000/account/'+id+'/deposit',
        {
            method : 'PUT',
            headers : {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const widthdrawFunds = async (id, ammount) => {

    const payload = {ammount}
    console.log("Widthdraw :", {payload});

    try {
        const response = await fetch('http://localhost:8000/account/'+id+'/widthdraw',
        {
            method : 'PUT',
            headers : {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const transferFunds = async (id, toAccountNumber, ammount) => {

    const payload = {ammount, toAccountNumber}
    
    console.log("Transfer :", {payload});

    try {
        const response = await fetch('http://localhost:8000/account/'+id+'/transfer',
        {
            method : 'PUT',
            headers : {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}