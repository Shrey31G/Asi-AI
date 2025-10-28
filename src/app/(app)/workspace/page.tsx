import ProfileButton from "@/components/profile-button";
import SignOutButton from "@/components/signOut-button";
import { authoptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Workspace() {
  const session = await getServerSession(authoptions);
  // if (!session) {
  //   redirect("/signin");
  // }
  return (
    <>
      <div className="grid h-screen grid-cols-12 overflow-hidden">
        <div className="col-span-2 flex min-h-0 flex-col border dark:bg-[rgb(31,30,29)]">
          <div className="min-h-12 w-full flex-shrink-0">hi</div>

          <div className="scrollbar-thin min-h-0 w-full flex-1 overflow-y-auto overscroll-contain">
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
          </div>

          <div className="flex h-17 w-full shrink-0 justify-center">
            <ProfileButton />
          </div>
        </div>

        <div className="col-span-10 h-screen min-h-0 flex-1 dark:bg-neutral-900">
          <div className="relative flex h-full flex-col overflow-hidden">
            <header className="sticky top-0 min-h-12 w-full flex-shrink-0">
              <div className="from-background via-background to-background/0 pointer-events-none absolute inset-0 -bottom-5 z-[-1] bg-gradient-to-b via-65% blur-sm dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900" />
              <div className="flex w-full items-center justify-between gap-4 p-3 pr-3 pl-11 lg:px-8 lg:pr-3 lg:pl-4">
                <div>ASI AI</div>
                <div>Share</div>
              </div>
            </header>

            <div className="scrollbar-thin flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui debitis corrupti officia accusantium dolorem non autem,
                laboriosam quos eius ad, repellat praesentium reprehenderit.
                Perspiciatis voluptatibus neque, cumque accusamus corrupti
                aperiam excepturi. Quam iure natus saepe officiis qui debitis
                enim minima perspiciatis dolor architecto pariatur ipsa corporis
                similique assumenda, fugit laboriosam laborum ratione. Quas
                veniam unde nam consequatur dignissimos inventore beatae numquam
                et, qui, eveniet totam odio. Quia fugit debitis laudantium
                quidem explicabo, accusamus aliquid possimus! Tempora eveniet
                mollitia ex maiores, nostrum nam nihil tenetur minus at et
                explicabo itaque autem eos totam reiciendis culpa doloremque
                tempore id qui cum. Incidunt, iste praesentium. Delectus maiores
                rem hic velit ipsa numquam fugit omnis iste ab voluptas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
