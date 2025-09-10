axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: loginData,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setIsSubmitted(true);
            setLoading(false);
            alert("Signed in successfully");
            const jwtToken = response.headers.authorization.split(" ")[1];
            if (jwtToken !== null) {
              sessionStorage.setItem("jwt", jwtToken);
              setLoggedInUser(email.current.value);
              setIsSubmitted(true);
              setLoading(false);
            } else {
              alert("Token failure!");
              setLoggedInUser("");
              setIsSubmitted(false);
            }
          } else {
            alert("Username or password not correct!");
            setLoggedInUser("");
            setIsSubmitted(false);
            setLoading(false);
          }
        })
        .then(() => {
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          alert("Login error!");
          setLoggedInUser("");
          setIsSubmitted(false);
          setLoading(false);
          console.log(error);
        });
    }
  };