import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
// import { Link , Alert} from 'components';
// import { Layout } from 'components/account';
import { userService } from '/services/user.services.js';
import { alertService } from '/services/alert.service';



export default Login;

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    // username: Yup.string().required('Email is required').email("Email is invalid"),
    username: Yup.string().required('Email / UserID is required'),
    password: Yup.string().required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function handleHideShow() {
    setShowPassword(password => !password)
  }


  function onSubmit({ username, password }) {

    return userService.login(username, password).then((res) => {

      console.log('reg:', res.status);

      if (res.status == 0) {

        alertService.error('Login error');

      } else {

        // alertService.success('Login successful', { keepAfterRouteChange: true });

        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      }

    }).catch(alertService.error);
  }

  return (
    <>


      <section className="gradient-form" style={{ backgroundColor: "#eee", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        <img src="/pen.svg" style={{ width: "30px", height: "30px" }} alt="logo" />
                        <h4 className="mt-5 mb-5 pb-0">Login to your account</h4>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "23rem" }} className="row1  ">


                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">Email / UserID</label>
                          <input name="username" type="text" {...register('username')} className={`form-control  form-control ${errors.username ? 'is-invalid' : ''}`} placeholder="Email / UserID" />
                          <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>

                        <div className="form-outline mb-4" style={{ position: 'relative' }}>
                          <label className="form-label">Password</label>

                          <input name="password" type={showPassword ? 'text' : 'password'} {...register('password')} className={`form-control  form-control ${errors.password ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.password?.message}</div>

                          {errors.password ? <button type='button' onClick={handleHideShow} style={{ background: 'transparent', border: 'none', position: 'absolute', top: '41%', right: '10%' }}>
                            {showPassword ? <i class="fa fa-eye" aria-hidden="true" />
                              : <i class="fa fa-eye-slash" aria-hidden="true" />
                            }
                          </button> : <button type='button' onClick={handleHideShow} style={{ background: 'transparent', border: 'none', position: 'absolute', top: '57%', right: '4%' }}>
                            {showPassword ? <i class="fa fa-eye" aria-hidden="true" />
                              : <i class="fa fa-eye-slash" aria-hidden="true" />
                            }
                          </button>}

                        </div>

                        <div style={{ margin: "auto1" }} className="  text-center pt-1 mb-5 pb-1 row1    ">

                          <button className="btn btn-primary btn-block    mb-3" disabled={formState.isSubmitting}  >
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                          </button>
                          {/* <a className="text-muted"  >Forgot password?</a> */}
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">Create new</button>
                        </div>

                      </form>

                      {/* <Alert /> */}

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white  ">
                      <img src="/login-banner.png" style={{ width: "100%" }} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  );
}
