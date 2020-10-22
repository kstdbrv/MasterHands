
  const getService = id => {
    if (service.length === 0) {
      dispatch(fetchService(`/services/${id}`))
    }
  }

    return (
    <>
      <Loader />   
      <Breadcrumbs
/*         categoryName={}
        subcategoryName={state.subcategories.subcategory_name}  */ 
      />    
      <div className="services__list">
      {
       subcategories.services.map(s => (
        <Link
         to={`/services/${s.id}`} key={s.id}
         onClick={() => getService(s.id)}
         className="services__item"  
        >
        <p>{s.service_name}</p>
        <span className="services__price">
          <span>{s.price}</span>
          <span> ₽</span> 
        </span>
        </Link> 
       ))
      }    
      </div>
      <ServicesText />  
    </>
  )

export default Services