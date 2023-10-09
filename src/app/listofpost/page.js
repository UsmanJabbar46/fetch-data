"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const fetchdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
});
const Userdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
});
const getdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://dog.ceo/api/breeds/image/random', {
        next: {
            revalidate: 10 // change after 10sec
        },
    });
    return res.json();
});
function ListofPost() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [posts, users, dog] = yield Promise.all([fetchdata(), Userdata(), getdata()]); // Corrected invocation of getdata
            return (<div>
        <image_1.default src={dog.message} alt="dog" width={300} height={300}/>
        {posts.map((post) => {
                    return <p key={post.id}>{post.title}</p>;
                })}
        <div>
          {users.map((user) => {
                    return <p key={user.id}>{user.name}</p>;
                })}
        </div>
      </div>);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
exports.default = ListofPost;
