import Container from "../Components/Ui/Container";
import intro from "../assets/image/intro.jpg"



const Home = () => {
    return (
         <Container>
             <div className="flex my-12 gap-5">
             <div className="flex-[1] flex flex-col justify-around">
                 <h1 className="text-5xl font-bold ">Quality Cleaning <br />  <span className="text-primary ">
                 For  Your Home </span> </h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, reprehenderit quod. Nesciunt labore numquam eveniet.</p>

                 <div className="flex gap-2">
                      <button className="btn btn-secondary">Book a Service</button>
                      <button className="btn btn-ghost">Read More</button>
                 </div>

                 <div className="divider"></div>

                 <div >
                 <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/nBJ7gfR/istockphoto-1389669994-170667a.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/nBJ7gfR/istockphoto-1389669994-170667a.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/nBJ7gfR/istockphoto-1389669994-170667a.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/nBJ7gfR/istockphoto-1389669994-170667a.webp" />
    </div>
  </div>
</div>
                 </div>


              </div>
              <div className="flex-[1] h-[600px]">
                 <img className="w-full h-full object-cover" src={intro} alt="" />
              </div>
             </div>

              </Container>
       
    );
};

export default Home;