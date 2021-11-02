import React from 'react'

export default function ContactUs() {
    return (
        <div className="grid grid-cols-5">
            <div className="flex h-screen img-bg col-span-2" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL
                    + "/assets/img/charles-rRWiVQzLm7k-unsplash.jpg"})`
            }}>
                <div className="m-auto" >
                    <img height="100" width="200" src="assets/img/logo-ALTA-v2.png" alt="Logo" />
                </div>
            </div>
            <div className="h-48 col-span-3 mr-12">
                <div className="h-full">
                    <form className="mt-12 ml-12" action="action_page.html">
                        <p className="text-3xl">Contact Us</p>
                        <div className="mb-6">
                            <label htmlFor="fullname" className="text-sm font-medium text-gray-900 block mb-2">Full Name<abbr
                                style={{ color: "red" }} title="required"> *</abbr></label>
                            <input type="text" id="fullname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Your Full Name Here..." />
                            <p id="validationName" className="text-red-500"></p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email Address<abbr
                                style={{ color: "red" }} title="required"> *</abbr></label>
                            <input type="email" id="email" placeholder="example@domail.com"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            <p id="validationEmail" className="text-red-500"></p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">Phone Number<abbr
                                style={{ color: "red" }} title="required"> *</abbr></label>
                            <input type="number" id="phone" placeholder="086969696969"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            <p id="validationPhone" className="text-red-500"></p>
                        </div>
                        <label className="font-semibold text-gray-600 py-2">Nationality<abbr style={{ color: "red" }}
                            title="required"> *</abbr></label>
                        <select
                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full"
                            name="integration[city_id]" id="integration_city_id">
                            <option value="">Seleted location</option>
                            <option value="Cochin,KL">Cochin,KL</option>
                            <option value="Mumbai,MH">Mumbai,MH</option>
                            <option value="Bangalore,KA">Bangalore,KA</option>
                        </select>
                        <p id="validationNational" className="text-red-500"></p>
                        <br></br>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-sm font-medium text-gray-900 block mb-2">Message<abbr
                                style={{ color: "red" }} title="required"> *</abbr></label>
                            <input type="textbox" id="message"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8" />
                            <p id="validationMessage" className="text-red-500"></p>
                        </div>

                        <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
