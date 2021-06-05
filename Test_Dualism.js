import metaphysics from 'descartes.phil';
const dualism = metaphysics.dualism();
const creator = metaphysics.creator();

/* 
    "test_basic_dualism_principles"
    A set of tests to verify that the dualism package we are using meets the basic requirements of dualisn
*/

function test_basic_dualism_principles = (dualism, creator) => { 
    
    const man = creator.make_a('man');

    const {body, mind} = man;

    let mind_exists_without_body = man - body === mind;
    
    let body_exists_without_mind = man - mind === body;

    function creator_exists_without_creation = (creator, creation) => {
        let temp_creator = creator;
        let temp_creation = creation;
        let all_creation = temp_creator[creations];
        let destroyed_creation = all_creation[temp_creation];
        all_creation.delete(destroyed_creation); //should cause little to no side effects
        return exists(temp_creator);
    }

    function creation_exists_without_creator = (creation) => {
        let temp_creator = undefined;
        let temp_creation = creation;
        temp_creation.update(creator=temp_creator) //should cause the creation to become undefined
        return exists(temp_creation)
    }

    dualism.assert(true, mind_exists_without_body);
    dualism.assert(false, body_exists_without_mind);
    dualism.assert(true, creator_exists_without_creation(creator, man));
    dualism.assert(false, creation_exists_without_creator(man));

}

const dualism_principles_in_module_work_as_expected = test_basic_dualism_principles(dualism, creator);
return dualism_principles_in_module_work_as_expected;

