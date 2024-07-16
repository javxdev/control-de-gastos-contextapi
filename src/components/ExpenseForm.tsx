import { categories } from "../data/categories"

export default function ExpenseForm() {
  return (
    <form className="space-y-5">
      <legend
        className="uppercase text-center text-2xl font-black border-b-4 border-blue-600 py-2"
      >
        Nuevo Gasto
      </legend>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseName"
          className="text-xl"
        >
           Nombre Gasto:
        </label>
        <input 
          type="text" 
          id="expenseName"
          name="expenseName"
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount"
          className="text-xl"
        >
           Cantidad:
        </label>
        <input 
          type="text" 
          id="amount"
          name="amount"
          placeholder="Añade la cantida del gasto. Ej. 300"
          className="bg-slate-100 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="category"
          className="text-xl"
        >
           Categoría:
        </label>
        <select
          className="bg-slate-100 p-2"
          name="category" 
          id="category"
        >
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option 
              value={category.id}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input 
        type="submit" 
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={`Registrar Gasto`}
      />
    </form>
  )
}