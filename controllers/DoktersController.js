/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
export const idokter = async (req, res) => {
    res.render('pages/dokter/index');
};

export const allDokters = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};

export const getDoktersById = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};

export const getDokters = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};

export const createDokters = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};

export const updateDokters = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};

export const deleteDokters = async (req, res) => {
    try {
      const response = await Dokter.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
    }
};
