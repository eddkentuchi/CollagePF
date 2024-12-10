const Section =({idref,children}) =>{
    return(
        <section id={idref} className="bg-slate-50 pb-8 pt-24 md:px-12 lg:px-24 w-full h-screen">
            {children}
        </section>
    )
}
export default Section