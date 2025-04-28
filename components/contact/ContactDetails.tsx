import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactDetails = () => (
  <div className="space-y-6">
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-1 font-montserrat">Our Office</h3>
          <p className="text-muted-foreground font-inter">
            123 Virtual Street
            <br />
            Montreal, QC H2X 1Y6
            <br />
            Canada
          </p>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-1 font-montserrat">Phone</h3>
          <p className="text-muted-foreground font-inter">+1 (514) 555-0123</p>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-1 font-montserrat">Email</h3>
          <p className="text-muted-foreground font-inter">info@vrdev.com</p>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Clock className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-1 font-montserrat">Business Hours</h3>
          <p className="text-muted-foreground font-inter">
            Monday - Friday: 9am - 6pm
            <br />
            Saturday: 10am - 4pm
            <br />
            Sunday: Closed
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ContactDetails;
