import { ChangeEvent, useEffect, useMemo,useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export const Header = () => {
  const [searchFilter, setSearchFilter] = useState({
    ingredient:'',
    category: '',
  });
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  const {fetchCategories,categories,searchRecipes } = useAppStore();
  useEffect(() => {
    fetchCategories();
  },[])
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

    const { name, value } = e.target;
    setSearchFilter({
      ...searchFilter,
      [name]: value
    });
    
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validar
    if(Object.values(searchFilter).includes('')){

    }

    searchRecipes(searchFilter );
  }
  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src={"/logo.svg"} alt="imagen logo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-900 uppercase font-bold "
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-900 uppercase font-bold "
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="text-white uppercase font-extrabold block text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className="w-full p-3 rounded-lg focus:outline-none"
                placeholder="Ej. tomate, lechuga, cebolla..."
                onChange={handleChange}
                value={searchFilter.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="text-white uppercase font-extrabold block text-lg"
              >
                Categoria
              </label>
              <select
                name="category"
                id="category"
                className="w-full p-3 rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilter.category}
              >
                <option value="">--Seleccione--</option>
                {categories.drinks.map((category) => (
                  <option key={category.strCategory} value={category.strCategory}>
                    {category.strCategory}
                  </option>
                  
                ))}
              </select>
            </div>

            <input
              type="submit"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 w-full text-white p-2 rounded-lg mt-5"
              value="Buscar recetas"
            />
          </form>
        )}
      </div>
    </header>
  );
};
