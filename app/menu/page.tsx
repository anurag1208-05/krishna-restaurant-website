import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Flame, Leaf } from 'lucide-react'

const menuCategories = [
  {
    name: 'Appetizers',
    description: 'Start your culinary journey with our flavorful starters',
    items: [
      {
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas',
        price: '₹180',
        isVeg: true,
      },
      {
        name: 'Chicken Tikka',
        description: 'Tender chicken marinated in yogurt and spices, grilled to perfection',
        price: '₹320',
        isSpicy: true,
      },
      {
        name: 'Paneer Pakora',
        description: 'Golden fried cottage cheese fritters with mint chutney',
        price: '₹280',
        isVeg: true,
      },
      {
        name: 'Seekh Kebab',
        description: 'Minced lamb skewers infused with aromatic herbs',
        price: '₹350',
        isSpicy: true,
      },
      {
        name: 'Vegetable Spring Rolls',
        description: 'Crispy rolls stuffed with fresh seasonal vegetables',
        price: '₹220',
        isVeg: true,
      },
      {
        name: 'Fish Amritsari',
        description: 'Crispy battered fish with traditional Punjabi spices',
        price: '₹380',
        isSpicy: true,
      },
    ],
  },
  {
    name: 'Main Courses',
    description: 'Authentic dishes that capture the essence of India',
    items: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken in rich, creamy tomato sauce with aromatic spices',
        price: '₹420',
      },
      {
        name: 'Lamb Rogan Josh',
        description: 'Slow-cooked lamb in aromatic Kashmiri spices',
        price: '₹520',
        isSpicy: true,
      },
      {
        name: 'Palak Paneer',
        description: 'Cottage cheese cubes in creamy spinach gravy',
        price: '₹360',
        isVeg: true,
      },
      {
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken in spiced creamy tomato curry',
        price: '₹440',
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils slow-cooked overnight with cream and butter',
        price: '₹320',
        isVeg: true,
      },
      {
        name: 'Goan Fish Curry',
        description: 'Fresh fish in tangy coconut curry from coastal India',
        price: '₹480',
        isSpicy: true,
      },
      {
        name: 'Chana Masala',
        description: 'Spiced chickpeas in tangy tomato gravy',
        price: '₹320',
        isVeg: true,
        isSpicy: true,
      },
      {
        name: 'Prawn Malai Curry',
        description: 'Succulent prawns in rich coconut cream sauce',
        price: '₹580',
      },
    ],
  },
  {
    name: 'Biryani & Rice',
    description: 'Fragrant rice dishes layered with tradition',
    items: [
      {
        name: 'Lamb Biryani',
        description: 'Fragrant basmati rice layered with slow-cooked lamb and saffron',
        price: '₹480',
      },
      {
        name: 'Chicken Biryani',
        description: 'Aromatic rice with tender chicken and whole spices',
        price: '₹420',
      },
      {
        name: 'Vegetable Biryani',
        description: 'Seasonal vegetables with fragrant basmati rice',
        price: '₹360',
        isVeg: true,
      },
      {
        name: 'Prawn Biryani',
        description: 'Succulent prawns with saffron-infused rice',
        price: '₹520',
      },
      {
        name: 'Jeera Rice',
        description: 'Basmati rice tempered with cumin seeds',
        price: '₹150',
        isVeg: true,
      },
      {
        name: 'Saffron Rice',
        description: 'Premium basmati rice infused with saffron threads',
        price: '₹180',
        isVeg: true,
      },
    ],
  },
  {
    name: 'Tandoor Specialties',
    description: 'From our traditional clay oven',
    items: [
      {
        name: 'Tandoori Chicken',
        description: 'Half chicken marinated in yogurt and spices, roasted in tandoor',
        price: '₹450',
        isSpicy: true,
      },
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese grilled in traditional tandoor oven',
        price: '₹360',
        isVeg: true,
      },
      {
        name: 'Lamb Chops',
        description: 'Premium lamb chops with aromatic spice marinade',
        price: '₹620',
      },
      {
        name: 'Tandoori Prawns',
        description: 'Jumbo prawns marinated and grilled in tandoor',
        price: '₹580',
      },
      {
        name: 'Mixed Grill Platter',
        description: 'Assortment of our finest tandoori selections',
        price: '₹780',
      },
    ],
  },
  {
    name: 'Breads',
    description: 'Fresh from our tandoor',
    items: [
      {
        name: 'Butter Naan',
        description: 'Soft leavened bread brushed with butter',
        price: '₹80',
        isVeg: true,
      },
      {
        name: 'Garlic Naan',
        description: 'Naan topped with fresh garlic and cilantro',
        price: '₹100',
        isVeg: true,
      },
      {
        name: 'Cheese Naan',
        description: 'Naan stuffed with melted cheese',
        price: '₹120',
        isVeg: true,
      },
      {
        name: 'Keema Naan',
        description: 'Naan stuffed with spiced minced lamb',
        price: '₹150',
      },
      {
        name: 'Tandoori Roti',
        description: 'Whole wheat bread from the tandoor',
        price: '₹60',
        isVeg: true,
      },
      {
        name: 'Laccha Paratha',
        description: 'Flaky layered whole wheat bread',
        price: '₹100',
        isVeg: true,
      },
    ],
  },
  {
    name: 'Desserts',
    description: 'Sweet endings to your meal',
    items: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings soaked in rose-flavored syrup',
        price: '₹180',
        isVeg: true,
      },
      {
        name: 'Rasmalai',
        description: 'Soft cottage cheese patties in saffron cream',
        price: '₹200',
        isVeg: true,
      },
      {
        name: 'Kheer',
        description: 'Traditional rice pudding with cardamom and nuts',
        price: '₹160',
        isVeg: true,
      },
      {
        name: 'Kulfi',
        description: 'Traditional Indian ice cream with pistachios',
        price: '₹180',
        isVeg: true,
      },
      {
        name: 'Mango Lassi',
        description: 'Sweet yogurt drink with fresh mango',
        price: '₹140',
        isVeg: true,
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Discover Our</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Menu
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            A carefully curated selection of authentic Indian dishes, prepared with the finest ingredients and traditional recipes.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-muted-foreground">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-muted-foreground">Spicy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {menuCategories.map((category) => (
              <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">{category.name}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="w-24 h-1 bg-gold mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4 group">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          {item.isVeg && <Leaf className="w-4 h-4 text-green-600" />}
                          {item.isSpicy && <Flame className="w-4 h-4 text-red-500" />}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-primary font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Please inform our staff of any allergies or dietary requirements. All prices are inclusive of applicable taxes. 
            A 18% gratuity will be added to parties of 6 or more.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
