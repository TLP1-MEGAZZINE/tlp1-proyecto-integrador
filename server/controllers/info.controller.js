const { findPaises } = require("../models/paises.model")
const { findDepar } = require("../models/departamento.model")
const { findRubro } = require("../models/rubro.model")
const { findLocal } = require("../models/localidad.model")
const { findProvinces } = require("../models/provincias.models")

const ctrlFindPaises = async (req, res) => {

    try {
        const paises = await findPaises()
        if (!paises) {
            throw new Error("Error buscar paises")
        } else {
            return res.status(200).json(paises)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error..." })
    }
}

const ctrlFindDepar = async (req, res) => {

    try {
        const depar = await findDepar()
        if (!depar) {
            throw new Error("Error buscar departamentos")
        } else {
            return res.status(200).json(depar)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error..." })
    }
}

const ctrlFindRubro = async (req, res) => {

    try {
        const depar = await findRubro()
        if (!depar) {
            throw new Error("Error buscar rubros")
        } else {
            return res.status(200).json(depar)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error..." })
    }
}

const ctrlFindLocal = async (req, res) => {

    try {
        const local = await findLocal()
        if (!local) {
            throw new Error("Error buscar rubros")
        } else {
            return res.status(200).json(local)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error..." })
    }
}

const ctrlFindProvinces = async (req, res) => {

    try {
        const local = await findProvinces()
        if (!local) {
            throw new Error("Error buscar rubros")
        } else {
            return res.status(200).json(local)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error..." })
    }
}

module.exports = { ctrlFindPaises, ctrlFindDepar, ctrlFindRubro, ctrlFindLocal, ctrlFindProvinces }