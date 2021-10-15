import skeleton from "./../assets/avatars/skeleton.png";
import weakSkeleton from "./../assets/avatars/weak-skeleton.png";

const avatars = {
  skeleton,
  weakSkeleton,
};

/**
 *
 * @param {*} props
 * @returns
 */
export function EnemyCard(props) {
  console.log(props.avatar);
  return (
    <div class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
      <div class="space-y-6 xl:space-y-10">
        <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={avatars[props.avatar]} alt="" />
        <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div class="font-medium text-lg leading-6 space-y-1">
            <h3 class="text-white">{props.name}</h3>
            <p class="text-indigo-400">Level {props.level}</p>
          </div>
        </div>
        <div>
          <p class="font-medium text-lg">
            HP: {props.health}/{props.maxHealth}
          </p>
        </div>
      </div>
    </div>
  );
}
