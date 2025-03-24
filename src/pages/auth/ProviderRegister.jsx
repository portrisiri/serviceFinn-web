import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/clerk-react';
import registerProvider from '../../components/provider/RegisterProvider'; // Import the Axios function
import { useNavigate } from 'react-router';

function ProviderRegister() {
  const { user } = useUser();
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  console.log(user);
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.primaryEmailAddress.emailAddress);
  console.log(user.primaryPhoneNumber.phoneNumber);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // useEffect(() => {
  //     if (user) {
  //         setValue('firstName', user.firstName || '');
  //         setValue('lastName', user.lastName || '');
  //         setValue('email', user.primaryEmailAddress?.emailAddress || '');
  //         setValue('phone', user.primaryPhoneNumber?.phoneNumber || '');
  //     }
  // }, [user, setValue]); // Add setValue to the dependency array

  const handleNext = (data) => {
    console.log('Form data:', data);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProviderStep1 register={register} handleSubmit={handleSubmit} errors={errors} onNext={handleNext} />;
      case 2:
        return (
          <ProviderStep2
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <ProviderStep3
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return (
          <ProviderStep4
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onPrev={handlePrev}
            watch={watch}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}

export default ProviderRegister;

function ProviderStep1({ register, handleSubmit, errors, onNext }) {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[800px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="flex items-start justify-start">
              <ul className="steps mb-6">
                <li className="step step-primary text-blue-500">Info</li>
                <li className="step text-gray-400">Authenticate</li>
                <li className="step text-gray-400">Bank</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="w-3/4">
              <label className="fieldset-label text-sm mt-2">First Name</label>
              <input
                type="text"
                {...register('firstName', { required: 'First name is required' })}
                placeholder="Enter your First name"
                className={`input input-bordered w-full mb-2 ${errors.firstName ? 'input-error' : ''}`}
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

              <label className="fieldset-label text-sm mt-2">Last Name</label>
              <input
                type="text"
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Enter your Last name"
                className={`input input-bordered w-full mb-2 ${errors.lastName ? 'input-error' : ''}`}
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

              <label className="fieldset-label text-sm mt-2">E-mail Address</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                placeholder="Enter your Email"
                className={`input input-bordered w-full mb-2 ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <label className="fieldset-label text-sm mt-2">Phone Number</label>
              <input
                type="text"
                {...register('phone', { required: 'Phone number is required' })}
                placeholder="Enter your Phone number"
                className={`input input-bordered w-full mb-2 ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

              <button type="submit" className="btn btn-primary w-full mt-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep2({ register, handleSubmit, errors, onNext, onPrev }) {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[900px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Register</li>
                <li className="step step-primary text-blue-500">Authenticate</li>
                <li className="step text-gray-400">Bank</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="w-3/4">
              <label className="fieldset-label text-sm mt-2">Personal / Company</label>
              <select {...register('accountType')} defaultValue="Personal" className="select w-full">
                <option>Personal</option>
                <option>Company</option>
              </select>

              <label className="fieldset-label text-sm mt-2">Company Name</label>
              <input
                type="text"
                {...register('companyName', { required: 'Company name is required' })}
                placeholder="Enter your Company name"
                className={`input input-bordered w-full mb-2 ${errors.companyName ? 'input-error' : ''}`}
              />
              {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}

              <label className="fieldset-label text-sm mt-2">Address</label>
              <input
                type="text"
                {...register('address', { required: 'Address is required' })}
                placeholder="Enter your Address"
                className={`input input-bordered w-full mb-2 ${errors.address ? 'input-error' : ''}`}
              />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}

              <label className="fieldset-label text-sm mt-2">City</label>
              <input
                type="text"
                {...register('city', { required: 'City is required' })}
                placeholder="Enter your City"
                className={`input input-bordered w-full mb-2 ${errors.city ? 'input-error' : ''}`}
              />
              {errors.city && <p className="text-red-500">{errors.city.message}</p>}

              <label className="fieldset-label text-sm mt-2">District</label>
              <input
                type="text"
                {...register('district', { required: 'District is required' })}
                placeholder="Enter your District"
                className={`input input-bordered w-full mb-2 ${errors.district ? 'input-error' : ''}`}
              />
              {errors.district && <p className="text-red-500">{errors.district.message}</p>}

              <label className="fieldset-label text-sm mt-2">Zipcode</label>
              <input
                type="text"
                {...register('zipCode', { required: 'Zipcode is required' })}
                placeholder="Enter your Zipcode"
                className={`input input-bordered w-full mb-2 ${errors.zipCode ? 'input-error' : ''}`}
              />
              {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}

              <label className="fieldset-label text-sm mt-2">Quanlification / Company verification</label>
              <input
                type="text"
                {...register('qualification', { required: 'Qualification is required' })}
                placeholder="Upload Photo"
                className={`input input-bordered w-full mb-2 ${errors.qualification ? 'input-error' : ''}`}
              />
              {errors.qualification && <p className="text-red-500">{errors.qualification.message}</p>}

              <label className="fieldset-label text-sm mt-2 ">Skill</label>
              <select
                {...register('skill', { required: 'Skill is required' })}
                defaultValue="skill"
                className="select w-full"
              >
                <option disabled={true}>skill</option>
                <option>Caring</option>
                <option>Cleaning</option>
                <option>Laundry</option>
                <option>Food & Transport</option>
                <option>Fixing</option>
                <option>Pet care</option>
                <option>Gardening</option>
              </select>
              {errors.skill && <p className="text-red-500">{errors.skill.message}</p>}

              <label className="fieldset-label text-sm mt-2">Identification Number</label>
              <input
                type="text"
                {...register('identificationNumber', { required: 'Identification number is required' })}
                placeholder="Enter your Identification Number"
                className={`input input-bordered w-full mb-2 ${errors.identificationNumber ? 'input-error' : ''}`}
              />
              {errors.identificationNumber && <p className="text-red-500">{errors.identificationNumber.message}</p>}

              <label className="fieldset-label text-sm mt-2">Identification Photo</label>
              <input
                type="text"
                {...register('identificationPhoto', { required: 'Identification photo is required' })}
                placeholder="Upload Photo"
                className={`input input-bordered w-full mb-2 ${errors.identificationPhoto ? 'input-error' : ''}`}
              />
              {errors.identificationPhoto && <p className="text-red-500">{errors.identificationPhoto.message}</p>}

              <button type="button" onClick={onPrev} className="btn btn-secondary w-1/2 mt-4 mr-2">
                Previous
              </button>
              <button type="submit" className="btn btn-primary w-1/2 mt-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep3({ register, handleSubmit, errors, onNext, onPrev }) {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Register</li>
                <li className="step step-primary text-blue-500">Authenticate</li>
                <li className="step step-primary text-blue-500">Bank</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="w-3/4">
              <label className="fieldset-label text-sm mt-2">Bank Name</label>
              <input
                type="text"
                {...register('bankName', { required: 'Bank name is required' })}
                placeholder="Enter your Bank name"
                className={`input input-bordered w-full mb-2 ${errors.bankName ? 'input-error' : ''}`}
              />
              {errors.bankName && <p className="text-red-500">{errors.bankName.message}</p>}

              <label className="fieldset-label text-sm mt-2">Bank Account</label>
              <input
                type="text"
                {...register('bankAccount', { required: 'Bank account is required' })}
                placeholder="Enter your Bank account"
                className={`input input-bordered w-full mb-2 ${errors.bankAccount ? 'input-error' : ''}`}
              />
              {errors.bankAccount && <p className="text-red-500">{errors.bankAccount.message}</p>}

              <button type="button" onClick={onPrev} className="btn btn-secondary w-1/2 mt-4 mr-2">
                Previous
              </button>
              <button type="submit" className="btn btn-primary w-1/2 mt-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep4({ register, handleSubmit, errors, onPrev, watch }) {
  const { user } = useUser();
  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const email = watch('email');
  const phone = watch('phone');
  const companyName = watch('companyName');
  const address = watch('address');
  const qualification = watch('qualification');
  const skill = watch('skill');
  const identificationNumber = watch('identificationNumber');
  const identificationPhoto = watch('identificationPhoto');
  const bankName = watch('bankName');
  const bankAccount = watch('bankAccount');
  const accountType = watch('accountType');
  const city = watch('city');
  const district = watch('district');
  const zipCode = watch('zipCode');

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        clerkID: user.id, // Pass Clerk user ID
        latitude: 10.0, // example latitude, add your latitude and longitude form field.
        longitude: 100.0, // example longitude, add your latitude and longitude form field.
      };
      await registerProvider(formData);
      alert('Provider registered successfully!');

      user.reload();
      navigate('/provider');
    } catch (error) {
      alert('Error registering provider. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[800px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Register</li>
                <li className="step step-primary text-blue-500">Authenticate</li>
                <li className="step step-primary text-blue-500">Bank</li>
                <li className="step step-primary text-blue-500">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <tbody>
                      <tr>
                        <th>First name</th>
                        <td>{firstName}</td>
                      </tr>
                      <tr>
                        <th>Last name</th>
                        <td>{lastName}</td>
                      </tr>
                      <tr>
                        <th>E-mail</th>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>{phone}</td>
                      </tr>
                      <tr>
                        <th>Account type</th>
                        <td>{accountType}</td>
                      </tr>
                      <tr>
                        <th>Company name</th>
                        <td>{companyName}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>{address}</td>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>{city}</td>
                      </tr>
                      <tr>
                        <th>District</th>
                        <td>{district}</td>
                      </tr>
                      <tr>
                        <th>Zipcode</th>
                        <td>{zipCode}</td>
                      </tr>
                      <tr>
                        <th>Quanlification</th>
                        <td>{qualification}</td>
                      </tr>
                      <tr>
                        <th>Skill</th>
                        <td>{skill}</td>
                      </tr>
                      <tr>
                        <th>Identify number</th>
                        <td>{identificationNumber}</td>
                      </tr>
                      <tr>
                        <th>Bank Name</th>
                        <td>{bankName}</td>
                      </tr>
                      <tr>
                        <th>Bank Account</th>
                        <td>{bankAccount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex">
                <button type="button" onClick={onPrev} className="btn btn-secondary w-1/2 mt-4 mr-2">
                  Previous
                </button>
                <button type="submit" className="btn btn-primary w-1/2 mt-4">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
