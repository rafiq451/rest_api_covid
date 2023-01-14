// import modelnya
const { json } = require('sequelize');
const Patients = require('../model/Patients');

class ControllerPatients {
  async index(req, res) {
    const patients = await Patients.findAndCountAll();

    if (patients.count > 0) {
      const data = {
        message: 'menampilkan seluruh data ',
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Student not Found / tidak ada data ',
      };
      res.status(404).json(data);
    }
  }

  //* menambahkan data
  async store(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
      //* respon jika salah satu data tidak dikirim
      const data = {
        message: 'semua data harus dikirim',
      };
      res.status(422).json(data);
    } else {
      const patients = await Patients.create(req.body);

      const data = {
        message: `Menambah data Student`,
        // jumlah: student,
        // data: student,
        data: patients,
      };
      res.status(201).json(data);
    }
  }

  //* detail data sesuai id
  async show(req, res) {
    const id = req.params.id;
    const patients = await Patients.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (patients) {
      const data = {
        message: `data dengan id ${id}`,
        data: patients,
        // data: Student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Resource not found`,
      };
      res.status(404).json(data);
    }
  }

  //* mengupdate data
  async update(req, res) {
    const patients = await Patients.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (patients) {
      const id = req.params.id;
      const { name, phone, address, status, in_date_at, out_date_at } = req.body;
      const patients = await Patients.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const data = {
        message: `Resource is update successfully`,
        jumlah: patients,
        data: {
          id: id,
          Nama: name,
          NoHandphone: phone,
          Alamat: address,
          Status: status,
          TglMasuk: in_date_at,
          TglKeluar: out_date_at,
        },
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Resource not found',
      };
      res.status(404).json(data);
    }
  }

  //* menghapus data
  async destroy(req, res) {
    const id = req.params.id;
    const patients = await Patients.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    });
    if (patients) {
      const data = {
        message: `Berhasil Menghapus data dengan id : ${id}`,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Resource not found`,
      };

      res.status(404).json(data);
    }
  }

  //* search sesuai nama
  async search(req, res) {
    const name = req.params.name;
    const patients = await Patients.findAndCountAll({
      where: {
        name: req.params.name,
      },
    });
    if (patients.count > 0) {
      const data = {
        message: `Get searched resource ${name}`,
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Resource not found`,
      };
      res.status(404).json(data);
    }
  }
  //* Get Positive Resource
  async positive(req, res) {
    const status = req.params.status;
    const patients = await Patients.findAndCountAll({
      where: {
        status: 'positive',
      },
    });
    const data = {
      message: `Get positive resource`,
      data: patients,
    };
    res.status(200).json(data);
  }

  //* Get recovered resource
  async recovered(req, res) {
    const status = req.params.status;
    const patients = await Patients.findAndCountAll({
      where: {
        status: 'recovered',
      },
    });
    const data = {
      message: `Get recovered resource`,
      data: patients,
    };
    res.status(200).json(data);
  }

  //* Get dead resource
  async dead(req, res) {
    const status = req.params.status;
    const patients = await Patients.findAndCountAll({
      where: {
        status: 'dead',
      },
    });
    const data = {
      message: `Get dead resource`,
      data: patients,
    };
    res.status(200).json(data);
  }
}

const object = new ControllerPatients();

module.exports = object;
