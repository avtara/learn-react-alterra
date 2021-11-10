import React, { useRef, useState } from 'react'

export default function FormPage() {
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: "",
    }

    const baseError = {
        nama: "",
        email: "",
        noHandphone: "",
    }
    const suratKesungguhan = useRef('')
    const [data, setData] = useState(baseData)
    const [errMsg, setErrMsg] = useState(baseError)

    const regexPhone = /^(\d{9,14})$/
    const regexemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexName = /^[A-Za-z ]*$/


    function setErr(name, message) {
        setErrMsg((prev) => ({
            ...prev,
            [name]: message
        }));
    }

    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        if (name === "nama") {
            if (regexName.test(value)) {
                setErr(name, "")
            } else {
                setErr(name, "Nama Lengkap Harus Berupa Huruf")
            }
        }

        if (name === "email") {
            if (regexemail.test(value)) {
                setErr(name, "")
            } else {
                setErr(name, "Email Tidak Sesuai")
            }
        }

        if (name === "noHandphone") {
            if (regexPhone.test(value)) {
                setErr(name, "")
            } else {
                setErr(name, "No Handphone Tidak Sesuai")
            }
        }

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        const keys = Object.keys(errMsg);
        let valid = keys.every((key) => errMsg[key] === "")
        if (!valid) {
            alert("Data Pendaftar Tidak Sesuai")
        } else {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
            resetData()
        }
        e.preventDefault()
    }

    const resetData = () => {
        setData(baseData)
        setErrMsg("")
    }

    return (
        <>
            <h1 style={{ "text-align": "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nama Lengkap:<br />
                    <input type="text" name="nama" value={data.nama} onChange={inputHandler} required /><br />
                </label>
                <label>
                    Email:<br />
                    <input type="text" name="email" value={data.email} onChange={inputHandler} required /><br />
                </label>
                <label>
                    No Handphone:<br />
                    <input type="text" name="noHandphone" value={data.noHandphone} onChange={inputHandler} required /><br />
                </label>
                <label>
                    Latar Belakang Pendidikan:<br />
                    <div>
                        <input type="radio" name="pendidikan" value="IT" onChange={inputHandler} checked={data.pendidikan === "IT" ? true : false} required />
                        <label style={{ "padding": "unset" }}>IT</label>
                        <input type="radio" name="pendidikan" value="Non IT" onChange={inputHandler} checked={data.pendidikan === "Non IT" ? true : false} required />
                        <label style={{ "padding": "unset" }}>Non IT</label>
                    </div>
                </label><br />
                <label>
                    Kelas Coding yang Dipilih:<br />
                    <select type="text" name="kelas" value={data.kelas} onChange={inputHandler} required>
                        <option value="" selected disabled hidden>Pilih Salah Satu Program</option>
                        <option>Coding BackEnd with Golang</option>
                        <option>Coding FrontEnd with ReactJS</option>
                        <option>Fullstack Developer</option>
                    </select>
                </label><br /><br />
                <label>
                    Foto Surat Kesungguhan:<br />
                    <input type="file" refs={suratKesungguhan} />
                </label><br /><br />
                <label>
                    Harapan Untuk Coding Bootcamp ini:<br />
                    <textarea name="harapan" id="" cols="25" rows="" value={data.harapan} onChange={inputHandler}></textarea>
                </label><br />

                <ul>
                    <li style={errMsg.nama ? { color: 'red' } : { display: 'none' }}>{errMsg.nama}</li>
                    <li style={errMsg.email ? { color: 'red' } : { display: 'none' }}>{errMsg.email}</li>
                    <li style={errMsg.noHandphone ? { color: 'red' } : { display: 'none' }}>{errMsg.noHandphone}</li>
                </ul><br />
                <div>
                    <input type="submit" value="Submit" />
                    <button onClick={resetData}>Reset</button>
                </div>
            </form>
        </>
    )
}