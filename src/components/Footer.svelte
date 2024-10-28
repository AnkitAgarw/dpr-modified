<script>
  import { Phone, Mail, MapPin } from "lucide-svelte";
</script>

<footer
  class="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 py-12 shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_rgba(255,215,0,0.3)]"
>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Contact Us -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Contact Us</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <Phone class="w-5 h-5 mr-2 flex-shrink-0" />
            <a href="tel:+917774066822" class="hover:underline">+91 77740 66822</a>
          </li>
          <li class="flex items-center">
            <Mail class="w-5 h-5 mr-2 flex-shrink-0" />
            <a href="mailto:info@dprinfra.com" class="hover:underline break-all"
              >info@dprinfra.com</a
            >
          </li>
        </ul>
      </div>
      <!-- Address -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Address</h3>
        <address class="not-italic flex items-start">
          <MapPin class="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
          <span>
            Plot No 1440,<br />
            Uppal Bhagayat,<br />
            Hyderabad
          </span>
        </address>
      </div>

      <!-- Head Office -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Head Office</h3>
        <address class="not-italic flex items-start">
          <MapPin class="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
          <span>
            2-3-581, Shiv Residency,<br />
            Road No 1, Sai Nagar Colony,<br />
            Nagole, Hyderabad
          </span>
        </address>
      </div>
      <!-- Follow Us -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Follow Us</h3>
        <!-- Add social media icons and links here -->
      </div>
    </div>
  </div>
  <div
    class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
  >
    <p>© 2024 DPR Infra Projects. All rights reserved.</p>
  </div>
</footer>
