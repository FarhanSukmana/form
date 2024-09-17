import React from "react";
import EmtekLogo from "./assets/Emtek.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      tanggal_keberangkatan: "",
      waktu_keberangkatan: "",
      tanggal_kepulangan: "",
      waktu_kepulangan: "",
      perusahaan: "",
      lokasi_keberangkatan: "",
      tujuan_keberangkatan: "",
      kegiatan: "",
      jumlah_penumpang: "",
      catatan: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email harus diisi"),
      name: Yup.string().required("Nama harus diisi"),
      tanggal_keberangkatan: Yup.date().required(
        "Tanggal keberangkatan harus diisi"
      ),
      waktu_keberangkatan: Yup.string().required(
        "Waktu keberangkatan harus diisi"
      ),
      tanggal_kepulangan: Yup.date().required("Tanggal kepulangan harus diisi"),
      waktu_kepulangan: Yup.string().required("Waktu kepulangan harus diisi"),
      perusahaan: Yup.string().required("Perusahaan harus diisi"),
      lokasi_keberangkatan: Yup.string().required(
        "Lokasi keberangkatan harus diisi"
      ),
      tujuan_keberangkatan: Yup.string().required(
        "Tujuan keberangkatan harus diisi"
      ),
      kegiatan: Yup.string().required("Kegiatan harus diisi"),
      jumlah_penumpang: Yup.number()
        .required("Jumlah penumpang harus diisi")
        .positive("Jumlah penumpang harus lebih dari 0")
        .integer("Jumlah penumpang harus berupa bilangan bulat"),
      catatan: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col w-full h-full">
      {/* HEADER */}
      <div className="flex w-full h-fit bg-[#6096AE] items-center justify-center py-2">
        <img src={EmtekLogo} alt="Emtek Logo" width={145} />
      </div>

      {/* Content */}
      <div className="flex flex-col h-fit items-center justify-center bg-blue-300/30 m-4 rounded-md">
        {/* judul */}
        <div>
          <h1 className="font-extrabold text-2xl pt-4 text-[#6096AE]">
            Peminjaman Mobil EMTEK
          </h1>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full px-12">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                className="p-1 rounded-md border-black border sm:w-1/5"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <label>Nama Lengkap</label>
              <input
                className="p-1 rounded-md border-black border sm:w-1/5"
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Nama Lengkap"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* KEBERANGKATAN */}
            <div className="flex sm:gap-12 gap-3 sm:flex-row flex-col">
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Tanggal keberangkatan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="date"
                  id="tanggal_keberangkatan"
                  name="tanggal_keberangkatan"
                  onChange={formik.handleChange}
                  value={formik.values.tanggal_keberangkatan}
                  placeholder="Tanggal Keberangkatan"
                />
                {formik.touched.tanggal_keberangkatan &&
                formik.errors.tanggal_keberangkatan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.tanggal_keberangkatan}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Waktu Keberangkatan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="time"
                  id="waktu_keberangkatan"
                  name="waktu_keberangkatan"
                  onChange={formik.handleChange}
                  value={formik.values.waktu_keberangkatan}
                  placeholder="Waktu Keberangkatan"
                />
                {formik.touched.waktu_keberangkatan &&
                formik.errors.waktu_keberangkatan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.waktu_keberangkatan}
                  </div>
                ) : null}
              </div>
            </div>

            {/* KEPULANGAN */}
            <div className="flex sm:gap-12 gap-3 w-full flex-col sm:flex-row">
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Tanggal Kepulangan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="date"
                  id="tanggal_kepulangan"
                  name="tanggal_kepulangan"
                  onChange={formik.handleChange}
                  value={formik.values.tanggal_kepulangan}
                  placeholder="Tanggal Kepulangan"
                />
                {formik.touched.tanggal_kepulangan &&
                formik.errors.tanggal_kepulangan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.tanggal_kepulangan}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Waktu kepulangan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="time"
                  id="waktu_kepulangan"
                  name="waktu_kepulangan"
                  onChange={formik.handleChange}
                  value={formik.values.waktu_kepulangan}
                  placeholder="Waktu Kepulangan"
                />
                {formik.touched.waktu_kepulangan &&
                formik.errors.waktu_kepulangan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.waktu_kepulangan}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Perusahaan */}
            <div>
              <label>Perusahaan</label>
              <Select
                onValueChange={(value) =>
                  formik.setFieldValue("perusahaan", value)
                }
                value={formik.values.perusahaan}
              >
                <SelectTrigger className="border border-black rounded-md">
                  <SelectValue placeholder="Pilih Perusahaan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Perusahaan_1">Perusahaan 1</SelectItem>
                    <SelectItem value="Perusahaan_2">Perusahaan 2</SelectItem>
                    <SelectItem value="Perusahaan_3">Perusahaan 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formik.touched.perusahaan && formik.errors.perusahaan ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.perusahaan}
                </div>
              ) : null}
            </div>

            {/* Lokasi Keberangkatan */}
            <div className="flex sm:gap-12 w-full sm:flex-row flex-col">
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Lokasi Keberangkatan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="text"
                  id="lokasi_keberangkatan"
                  name="lokasi_keberangkatan"
                  onChange={formik.handleChange}
                  value={formik.values.lokasi_keberangkatan}
                  placeholder="Lokasi Keberangkatan"
                />
                {formik.touched.lokasi_keberangkatan &&
                formik.errors.lokasi_keberangkatan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.lokasi_keberangkatan}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Tujuan Keberangkatan</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="text"
                  id="tujuan_keberangkatan"
                  name="tujuan_keberangkatan"
                  onChange={formik.handleChange}
                  value={formik.values.tujuan_keberangkatan}
                  placeholder="Tujuan Keberangkatan"
                />
                {formik.touched.tujuan_keberangkatan &&
                formik.errors.tujuan_keberangkatan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.tujuan_keberangkatan}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Kegiatan & Jumlah Penumpang */}
            <div className="flex sm:gap-12 gap-3 w-full sm:flex-row flex-col">
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Kegiatan</label>
                <input
                  className="p-1 rounded-md border-black border "
                  type="text"
                  id="kegiatan"
                  name="kegiatan"
                  onChange={formik.handleChange}
                  value={formik.values.kegiatan}
                  placeholder="Kegiatan"
                />
                {formik.touched.kegiatan && formik.errors.kegiatan ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.kegiatan}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/5">
                <label>Jumlah Penumpang</label>
                <input
                  className="p-1 rounded-md border-black border"
                  type="number"
                  id="jumlah_penumpang"
                  name="jumlah_penumpang"
                  onChange={formik.handleChange}
                  value={formik.values.jumlah_penumpang}
                  placeholder="Jumlah Penumpang"
                />
                {formik.touched.jumlah_penumpang &&
                formik.errors.jumlah_penumpang ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.jumlah_penumpang}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Catatan */}
            <div className="flex flex-col gap-1 w-full">
              <label>Catatan</label>
              <textarea
                className="flex p-1 rounded-md border-black border sm:w-full"
                type="text"
                id="catatan"
                name="catatan"
                onChange={formik.handleChange}
                value={formik.values.catatan}
                placeholder="Catatan"
              />
              {formik.touched.catatan && formik.errors.catatan ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.catatan}
                </div>
              ) : null}
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#6384FC] rounded-md py-2 w-1/2 text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center p-4 bg-gray-600 text-white">Copyright © 2024 Emtek</div>
    </div>
  );
};

export default App;
