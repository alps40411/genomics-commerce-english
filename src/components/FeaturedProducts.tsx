
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "DNA Sequencing Kit",
    description: "High-throughput DNA sequencing solution",
    price: "$1,999",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "PCR Analyzer",
    description: "Advanced PCR analysis system",
    price: "$2,499",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Genome Mapping Kit",
    description: "Complete genome mapping solution",
    price: "$3,999",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "RNA Extraction Kit",
    description: "Professional RNA extraction tools",
    price: "$899",
    image: "/placeholder.svg"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
